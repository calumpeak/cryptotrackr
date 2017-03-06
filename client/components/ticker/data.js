'use strict';

import React, { Component, PropTypes } from 'react';
import Chart from 'components/chart';

const headerStyle = {
    margin: '0px 16px 0px 16px',
    height: '25px',
    fontWeight: 'bold',
    lineHeight: '25px'
};

const bodyStyle = {
    height: '125px'
};

const footerStyle = {
    margin: '0px 16px 0px 16px',
    height: '25px',
    lineHeight: '25px'
};

const floatedRight = {
    float: 'right',
    fontWeight: 'normal'
};

class Data extends Component {
    constructor (props, context) {
        super(props);

        this.currency = context.currency.get;
    }

    render () {
        const {
            tickerId, price, currencyTo, lastMarket, volume24Hour, lastUpdate
        } = this.props;

        return (
            <div>
                <div style = {headerStyle}>
                    {`${this.currency(currencyTo)} ${Number(price)}`}
                    <span style = {floatedRight}>
                        {`Vol: ${Number(volume24Hour).toFixed(2)}`}
                    </span>
                </div>
                <div style = {bodyStyle}>
                    <Chart tickerId = {tickerId} />
                </div>
                {/*<div style = {footerStyle}>
                    {`${lastMarket}`}
                    <span style = {floatedRight}>
                        {`${new Date().getMinutes() - new Date(+lastUpdate * 1000).getMinutes()} min ago`}
                    </span>
                </div>*/}
            </div>
        );
    }
}

Data.contextTypes = {
    currency: PropTypes.object.isRequired
};

Data.propTypes = {
    tickerId: PropTypes.string.isRequired,
    currencyTo: PropTypes.string.isRequired,
    currencyFrom: PropTypes.string.isRequired,
    lastUpdate: PropTypes.string.isRequired,
    volume24Hour: PropTypes.string.isRequired,
    high24Hour: PropTypes.string.isRequired,
    low24Hour: PropTypes.string.isRequired,
    lastMarket: PropTypes.string.isRequired,
    price: PropTypes.string
};

export default Data;
