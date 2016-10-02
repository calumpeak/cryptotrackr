'use strict';

import React, { PropTypes } from 'react';
import CircularProgress from 'material-ui/CircularProgress';
import _ from 'lodash';

const progressWrapper = {
    width: 'inherit',
    height: 'inherit',
    position: 'relative'
};

const progressStyle = {
    position: 'absolute',
    margin: 'auto',
    top: 0,
    right: 0,
    bottom: 0,
    left: 0
};

const ProgressCircular = ({ style }) => (
    <div style = {_.merge(progressWrapper, style)}>
        <CircularProgress style = {progressStyle}/>
    </div>
);

export {
    ProgressCircular
}
