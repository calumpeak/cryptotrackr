'use strict';

import React, { Component, PropTypes } from 'react';
import Paper from 'material-ui/Paper';
import NextIcon from 'material-ui/svg-icons/image/navigate-next';
import PrevIcon from 'material-ui/svg-icons/image/navigate-before';

const paperStyle = {
    width: '20px',
    height: '200px',
    position: 'relative'
};

const iconStyle = {
    position: 'absolute',
    margin: 'auto',
    top: 0,
    right: 0,
    bottom: 0,
    left: 0
};

const ArrowNext = () => (
    <Paper style = {paperStyle}>
        <NextIcon style = {iconStyle} />
    </Paper>
);

const ArrowPrev = () => (
    <Paper style = {paperStyle}>
        <PrevIcon style = {iconStyle} />
    </Paper>
);

export {
    ArrowNext,
    ArrowPrev
};
