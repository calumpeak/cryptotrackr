'use strict';

import React, { Component, PropTypes } from 'react';
import { Card, CardHeader, CardText } from 'material-ui/Card';
import { ProgressCircular } from 'components/progress';

import _ from 'lodash';
import Currency from './data';

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
    width: '350px'
};

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

const progressStyle = {
    borderRadius: '2px',
    backgroundColor: 'rgb(255, 255, 255)'
};


class Ticker extends Component {
    constructor (props, context) {
        super(props);

        const { tickerId } = this.props.options;

        this.state = _.assign({}, defaultFields);

        this.tickerData = this.tickerData.bind(this);
        this.socket = context.socket;
        this.socket.on(`ticker:${tickerId}`, this.tickerData);
        this.socket.emit('schedule', { tickerId });
    }

    componentWillUnmount () {
        const { tickerId } = this.props.options;

        this.socket.removeListener(`ticker:${tickerId}`, this.tickerData);
        this.socket.emit('forget', { tickerId });
    }

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
                {currencyFrom
                    ?   <Card style = {tickerStyle}>
                            <CardHeader title = {`${currencyFrom} - ${currencyTo}`} style = {headerStyle} />
                            <CardText style = {bodyStyle}>
                                <Currency tickerId = {tickerId}  {...this.state} />
                            </CardText>
                        </Card>
                    :   <ProgressCircular style = {progressStyle}/>
                }
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
