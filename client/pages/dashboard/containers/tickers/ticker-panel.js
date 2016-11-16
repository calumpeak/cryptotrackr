'use strict';

import React, { Component, PropTypes } from 'react';
import { Card, CardHeader, CardText } from 'material-ui/Card';
import Data from './data';
import { LoaderCircular } from 'HOC/loader';

const tickerStyle = {
    height: '200px',
    width: '350px',
};

const headerStyle = {
    paddingBottom: '0px',
    fontWeight: 'bold'
};

const bodyStyle = {
    paddingLeft: '0px',
    paddingRight: '0px'
};

class TickerPanel extends Component {
    constructor (props) {
        super(props);
    }

    render () {
        const { currencyFrom, currencyTo } = this.props;

        return (
            <Card style = {tickerStyle}>
                <CardHeader title = {`${currencyFrom} - ${currencyTo}`} style = {headerStyle} />
                <CardText style = {bodyStyle}>
                    <Data {...this.props} />
                </CardText>
            </Card>
        );
    }
}

TickerPanel.propTypes = {
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

export default LoaderCircular('currencyFrom')(TickerPanel);
