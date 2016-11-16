'use strict';

import React, { Component, PropTypes } from 'react';
import { Card, CardHeader, CardText } from 'material-ui/Card';
import TickerPanel from './ticker-panel';
import _ from 'lodash';


const defaultFields = {
    currencyTo: '',
    currencyFrom: '',
    lastUpdate: '',
    volume24Hour: '',
    high24Hour: '',
    low24Hour: '',
    lastMarket: '',
    price: ''
};

const containerStyle = {
    margin: '10px auto 10px',
    height: '200px',
    width: '350px',
    backgroundColor: '#FFFFFF'
};

class Ticker extends Component {
    constructor (props, context) {
        super(props);

        const { tickerId } = this.props.options;

        this.state = _.assign({}, defaultFields);
        this.socket = context.socket;

        this.tickerData = this.tickerData.bind(this);
    }

    componentDidMount () {
        const { tickerId } = this.props.options;

        this.socket.on(`ticker:${tickerId}`, this.tickerData);
        this.socket.emit('schedule', { tickerId });
    }

    componentWillUnmount () {
        const { tickerId } = this.props.options;

        this.socket.removeListener(`ticker:${tickerId}`, this.tickerData);
        this.socket.emit('forget', { tickerId });
    }

    /**
     * Sets current state from incoming data
     *
     * @for Ticker
     * @method tickerData
     * @param {Object} data
     */
    tickerData (data) {
        const aggregate = data.AggregatedData;

        this.setState({
            currencyTo: aggregate.TOSYMBOL,
            currencyFrom: aggregate.FROMSYMBOL,
            price: aggregate.PRICE,
            lastUpdate: aggregate.LASTUPDATE,
            volume24Hour: aggregate.VOLUME24HOUR,
            high24Hour: aggregate.HIGH24HOUR,
            low24Hour: aggregate.LOW24HOUR,
            lastMarket: aggregate.LASTMARKET
        });
    }

    render () {
        const { currencyTo, currencyFrom } = this.state;
        const { tickerId } = this.props.options;

        return (
            <div style = {containerStyle}>
                <TickerPanel tickerId = {tickerId}  {...this.state} />
            </div>
        );
    }
}

Ticker.contextTypes = {
    socket: PropTypes.object.isRequired
};

Ticker.propTypes = {
    options: PropTypes.shape({
        tickerId: PropTypes.string.isRequired
    })
};

export default Ticker;
