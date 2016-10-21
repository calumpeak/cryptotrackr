'use strict';

import React, { Component, PropTypes } from 'react';
import Divider from 'material-ui/Divider';
import { FloatingButton } from 'components/buttons';
import TickerSlider from './ticker-slider';
import AddTicker from './add-ticker';

class Tickers extends Component {
    constructor (props) {
        super(props);

        this.state = {
            tickers: ['BTC:USD', 'ETH:USD', 'DASH:USD', 'XMR:USD', 'LTC:USD', 'NAV:BTC', 'MAID:BTC', 'AMP:BTC', 'DOGE:USD'],
            dialogOpen: false
        };
    }

    /**
     * Adds a ticker to the current state
     *
     * @for Tickers
     * @method addTicker
     * @param {String} tickerId
     */
    addTicker (tickerId) {
        this.setState({ tickers: [...this.state.tickers, tickerId] });
    }

    /**
     * Removes a ticker from the current state
     *
     * @for Tickers
     * @method removeTicker
     * @param {String} tickerId
     */
    removeTicker (tickerId) {
        this.setState({ tickers: this.state.tickers.filter(ticker => ticker !== tickerId) });
    }

    /**
     * When triggered sets the dialog open state to the inverse of what it was
     * previously.
     *
     * @for Tickers
     * @handleOpenState
     */
    handleDialogOpenState () {
        this.setState({ dialogOpen: !this.state.dialogOpen });
    }

    render () {
        const { tickers, dialogOpen } = this.state;
        return (
            <div>
                <TickerSlider tickers = {tickers} />
                <AddTicker
                    open = {dialogOpen}
                    addTicker = {(tickerId) => this.addTicker(tickerId)}
                    handleOpenState = {() => this.handleDialogOpenState()}
                />
                <FloatingButton onClick = {() => this.handleDialogOpenState()}/>
            </div>
        );
    }
}

export default Tickers;
