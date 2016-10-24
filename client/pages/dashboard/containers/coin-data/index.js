'use strict';

import React, { Component, PropTypes } from 'react';
import { Card, CardText, CardHeader } from 'material-ui/Card';
import Chart from './chart';

const cardStyle = {
    margin: '5px, 25px, 0px, 25px'
};

class CoinData extends Component {
    constructor (props) {
        super(props);
    }

    render () {
        return (
            <Card style = {cardStyle}>
                <CardHeader />
                <CardText>
                    <Chart  {...this.props}/>
                </CardText>
            </Card>
        );
    }
}

CoinData.propTypes = {
    tickerId: PropTypes.string.isRequired
};

export default CoinData;
