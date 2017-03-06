'use strict';

import React, { Component, PropTypes } from 'react';
import Dialog from 'material-ui/Dialog';

class AddTicker extends Component {
    constructor (props) {
        super(props);
    }

    actions () {
        return [];
    }

    render () {
        const { open, handleOpenState } = this.props;

        return (
            <Dialog open = {open} onRequestClose = {handleOpenState} actions = {this.actions()}>
                {'AddTicker Functionality Goes Here!!'}
            </Dialog>
        );
    }
}

AddTicker.propTypes = {
    open: PropTypes.bool.isRequired,
    handleOpenState: PropTypes.func.isRequired
    // addTicker: PropTypes.func.isRquired
};

export default AddTicker;
