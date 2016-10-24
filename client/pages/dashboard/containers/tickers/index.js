'use strict';

import React, { Component, PropTypes } from 'react';
import TickerSlider from './ticker-slider';

class Tickers extends Component {
    constructor (props) {
        super(props);
    }

    render () {
        const { tickers } = this.props;

        return (
            <TickerSlider tickers = {tickers} />
        );
    }
}

export default Tickers;
