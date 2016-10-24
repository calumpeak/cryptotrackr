'use strict';

import React, { Component, PropTypes } from 'react';
import AddTicker from './containers/tickers/add-ticker';
import { FloatingButton } from 'components/buttons';
import Tickers from './containers/tickers';
import CoinData from './containers/coin-data';

class Dashboard extends Component {
    constructor (props) {
        super(props);

        this.state = {
            tickers: ['BTC:USD', 'ETH:USD', 'DASH:USD', 'XMR:USD', 'LTC:USD', 'NAV:BTC', 'MAID:BTC', 'AMP:BTC', 'DOGE:USD'],
            dialogOpen: false,
            selectedTicker: null
        };
    }

    /**
     * Adds a ticker to the current state
     *
     * @for Dashboard
     * @method addTicker
     * @param {String} tickerId
     */
    addTicker (tickerId) {
        this.setState({ tickers: [...this.state.tickers, tickerId] });
    }

    /**
     * Removes a ticker from the current state
     *
     * @for Dashboard
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
     * @for Dashboard
     * @handleOpenState
     */
    handleDialogOpenState () {
        this.setState({ dialogOpen: !this.state.dialogOpen });
    }

    render () {
        const { tickers, dialogOpen, selectedTicker } = this.state;

        return (
            <div>
                <Tickers tickers = {tickers}/>
                <CoinData tickerId = {selectedTicker || tickers[0]}/>
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

Dashboard.propTypes = {

};

export default Dashboard;
