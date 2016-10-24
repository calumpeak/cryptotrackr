'use strict';

import React, { Component, PropTypes } from 'react';
import { ResponsiveContainer, CartesianAxis, LineChart, XAxis, YAxis, Tooltip, Line } from 'recharts';

const chartMargin = {
    top: 5,
    left: 0,
    bottom: 5,
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

        this.socket.on(`dayData:${tickerId}`, (data) => {
            this.setState({ data: data.Data.map(dayData => ({
                date: dayData.time * 1000,
                close: dayData.close
            }))});
        });

        this.socket.emit('dayData', { tickerId });
    }

    componentWillUnmount () {
        const { tickerId } = this.props;

        this.socket.removeListener(`hourData:${tickerId}`, this.tickerData);
    }

    render () {
        const { data } = this.state;

        return (
            <div style = {{height: '400px'}}>
                <ResponsiveContainer>
                    <LineChart data = {data} margin = {chartMargin}>
                        <YAxis domain = {['datamin', 'dataMax']} hide = {false} />
                        <XAxis dataKey = 'date' hide = {false} />
                        <Line
                            type = 'monotone'
                            dataKey = 'close'
                            stroke = {this.colours.primary2Color}
                            dot = {false}
                            activeDot = {true}
                            unit = {this.currencies[1]}
                            />
                    </LineChart>
                </ResponsiveContainer>
            </div>
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
