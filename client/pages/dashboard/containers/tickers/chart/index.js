'use strict';

import React, { Component, PropTypes } from 'react';
import { ResponsiveContainer, AreaChart, LineChart, XAxis, YAxis, Tooltip, Line, Area } from 'recharts';
import ToolTip from './tooltip';
import _ from 'lodash';

// Line chart takes integers for margins
const chartMargin = {
    top: 5,
    left: 0,
    bottom: 0,
    right: 0
};

class Chart extends Component {
    constructor (props, context) {
        super(props);

        const { tickerId } = this.props;

        this.currencies = tickerId.split(':');
        this.socket = context.socket;
        this.colours = context.muiTheme.palette;
        this.currency = context.currency.get;

        this.state = {
            data: []
        };

        this.socket.on(`hourData:${tickerId}`, (data) => {
            this.setState({data: data.Data.map(hourData => ({
                name: new Date(+hourData.time * 1000).getHours(),
                close: hourData.close
            }))});
        });

        this.socket.emit('hourData', { tickerId });
    }

    componentWillUnmount () {
        const { tickerId } = this.props;

        this.socket.removeListener(`hourData:${tickerId}`, this.tickerData);
    }

    render() {
        return (
            <ResponsiveContainer>
                <AreaChart data = {this.state.data} margin = {chartMargin}>
                    <Tooltip content = {
                        <ToolTip colours = {this.colours} currency = {this.currency} />
                    } />
                <YAxis domain = {['auto', 'auto']} hide = {true} />
                    <XAxis dataKey = 'name' hide = {true} />
                    <Area
                        type = 'monotone'
                        dataKey = 'close'
                        stroke = {'#FFF'}
                        fill = {this.colours.primary2Color}
                        dot = {false}
                        activeDot = {true}
                        unit = {this.currencies[1]}
                        />
                </AreaChart>
            </ResponsiveContainer>
        );
    }
}

Chart.contextTypes = {
    socket: PropTypes.object.isRequired,
    currency: PropTypes.object.isRequired,
    muiTheme: PropTypes.object.isRequired
};

Chart.propTypes = {
    tickerId: PropTypes.string.isRequired
};

export default Chart;
