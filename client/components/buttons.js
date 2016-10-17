'use strict';

import React, { PropTypes } from 'react';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';

const floatingButtonStyle = {
    position: 'absolute',
    right: '0px',
    bottom: '2px'
};

const FloatingButton = ({ onClick }) => (
    <FloatingActionButton style = {floatingButtonStyle} onClick = {onClick}>
        <ContentAdd />
    </FloatingActionButton>
);

export {
    FloatingButton
};
