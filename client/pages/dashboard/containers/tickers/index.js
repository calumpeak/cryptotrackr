'use strict';

import React, { Component, PropTypes } from 'react';
import { FloatingButton } from '../../../../components/buttons';
import Ticker from './ticker';
import AddTicker from './add-ticker';

class Tickers extends Component {
    constructor (props) {
        super(props);

        this.state = {
            tickers: ['BTC:USD', 'ETH:USD', 'DASH:USD', 'XMR:USD', 'LTC:USD', 'NAV:BTC', 'MAID:BTC', 'AMP:BTC', 'DOGE:USD'],
            dialogOpen: false
        };
    }

    addTicker (tickerId) {
        this.setState({ tickers: [...this.state.tickers, tickerId] });
    }

    removeTicker (tickerId) {
        this.setState({ tickers: this.state.tickers.filter(ticker => ticker !== tickerId) });
    }

    handleDialogOpenState () {
        this.setState({ dialogOpen: !this.state.dialogOpen });
    }

    render () {
        const { tickers, dialogOpen } = this.state;
        return (
            <div style = {{ position: 'relative' }}>
                <div style ={{ textAlign: 'center' }}>
                    {tickers.map(tickerId =>
                        <Ticker
                            key = {tickerId}
                            options = {{ tickerId }}
                        />
                    )}
                </div>
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
