'use strict';

import React, { Component, PropTypes } from 'react';
import { merge } from 'lodash';

const toolTipStyle = {
    minWidth: '90px',
    maxWidth: '160px',
    paddingLeft: '5px',
    paddingRight: '5px',
    height: '40px',
    textAlign: 'center',
    lineHeight: '20px'
};

class ToolTip extends Component {
    constructor (props) {
        super(props);

        const { colours } = this.props;

        this.style = merge(toolTipStyle, {
            border: `1px solid ${colours.borderColor}`,
            backgroundColor: `${colours.canvasColor}`
        });
    }

    render () {
        const { currency } = this.props;
        const { value, unit } = this.props.payload[0];
        const { name } = this.props.payload[0].payload;

        return (
            <div style = {this.style}>
                <div style = {{height: '50%'}}>
                    {`${currency(unit)} ${value}`}
                </div>
                <div style = {{height: '50%'}}>
                    {name}
                </div>
            </div>
        );
    }
}

ToolTip.propTypes = {
    colours: PropTypes.object.isRequired,
    currency: PropTypes.func.isRequired,
    payload: PropTypes.array
};

export default ToolTip;
