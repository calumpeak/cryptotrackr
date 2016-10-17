'use strict';

const Events = require('events');
const request = require('request');
const async = require('async');
const _ = require('lodash');

const debounceTime = 250;

// Cryptocompare's API caches for 5 seconds. They kindly request we poll at 10s
const tickTime = 10000;


/**
 * Builds a Ticker instance which makes a parallel call to all registered tickers
 * to an API endpoint. Once all all calls return, it schedules another call based on tickTime.
 * Each ticker can emit an event to the provided socket under it's specific key with its returned data.
 * A ticker can also be removed from the ticker queue if necessary or the entire process stopped entirely.
 *
 * @class Ticker
 * @param {Object} options
 * @param {Object} options.scoket
 */
class Ticker {
    constructor (options) {
        this.events = new Events();
        this.socket = options.socket;
        this.tickers = {};
        this.tickInterval;
        this.tickAllowed = false;

        // Set a debounce to the class for starting ticker
        // If multiple schedule requests come through within x of each other
        // They can be all kicked off at the same time if the ticker is not already
        // running.
        this.attemptStart = _.debounce(() => {
            this.start();
        }, debounceTime);
    }

    /**
     * Registers a currency into the tickers loop. If no currencies are previously
     * registered, request will be made immediately, else it will be scheduled
     * into the next tick call. All tickers are called in parallel and are responsible
     * for themselves. Each ticker will send it's data recieved (via socket) as
     * soon as it's available.
     * Requests can also be aborted individually or all tickers in the loop can be killed.
     *
     * @for Ticker
     * @method schedule
     * @param {Object} options
     * @param {String} options.tickerId Id is based on a crypto:currency pair
     */
    schedule (options) {
        const tickerId = options.tickerId;
        const currencyPair = tickerId.split(':');
        const cryptoCurrency = currencyPair[0];
        const currency = currencyPair[1];
        let ongoing;

        // Ticker is already scheduled
        if (this.tickers[tickerId]) {
            return;
        }

        this.tickers[tickerId] = (callback) => {
            const requestOptions = {
                url: `https://www.cryptocompare.com/api/data/coinsnapshot?fsym=${cryptoCurrency}&tsym=${currency}`,
                headers: {
                    Origin: 'https://www.cryptocompare.com'
                }
            };

            ongoing = request(requestOptions, (err, res, body) => {
                if (err) {
                    callback(err);
                }

                body = JSON.parse(body);

                this.sendData(tickerId, body.Data);
                callback(null);
            });
        };

        // Kill any ongoing requests asynchronously if necessary
        this.events.on('stopOngoing', (event) => {
            setImmediate(() => {
                if ((event.all || event.tickerId === tickerId) && ongoing) {
                    ongoing.abort();
                }
            });
        });

        // Attempt to start the ticker if it's not already running
        this.attemptStart();
    }

    /**
     * Removes a ticker from the tickers list and attempts to abort any processes
     * tied to it. If there are no more tickers left on the list, it stops the
     * ticking process entirely
     *
     * @for Ticker
     * @method forget
     * @param {String} tickerId
     */
    forget (tickerId) {
        // Kill ongoing requests for this ID
        this.events.emit('stopOngoing', { tickerId });

        // Delete this ticker
        delete this.tickers[tickerId];

        // Stop ticking if there are no keys to process
        if (!_.keys(this.ticker).length) {
            this.stop();
        }
    }

    /**
     * Starts the ticking process if one isn't already running
     *
     * @for Ticker
     * @method start
     */
    start () {
        // Already ticking, return
        if (this.tickAllowed) {
            return;
        }

        // Enable ticking
        this.tickAllowed = true;
        this.tick();
    }

    /**
     * Stops the ticking process entirely
     * Cancels any ongoing requests
     * Clears any intervals set up for the next tick
     * TODO remove all tickers?
     *
     * @for Ticker
     * @method stop
     */
    stop () {
        this.events.emit('stopOngoing', { all: true });
        this.tickAllowed = false;
        clearTimeout(this.tickInterval);
        this.tickers = {};
    }

    /**
     * Makes an asynchronous parallel call for all available tickers
     * Once all have resolved, recursively calls itself after the tickTime delay.
     * Can be stopped by clearing the interval and updating the tickAllowed flag
     *
     * @for Ticker
     * @method tick
     */
    tick () {
        async.parallel(this.tickers, (err) => {
            if (err) {
                this.socket.emit('error', err);
            }

            if (this.tickAllowed) {
                this.tickInterval = setTimeout(() => {
                    this.tick();
                }, tickTime);
            }
        });
    }

    /**
     * Sends data via the socket
     * Message format 'ticker:tickerId'
     *
     * @for Ticker
     * @method sendData
     */
    sendData (tickerId, data) {
        if (!this.socket.connected) {
            return;
        }

        this.socket.emit(`ticker:${tickerId}`, _.defaults(data));
    }
}

module.exports = Ticker;
