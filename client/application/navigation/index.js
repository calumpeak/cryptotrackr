'use strict';

import React, { PropTypes, Component } from 'react';
import AppBar from 'material-ui/AppBar';
import TabNavigation from './tab-navigation';

const style = {
    position: 'fixed',
    top: '0px'
};

class Navigation extends Component {
    constructor (props) {
        super(props);
    }

    title () {
        return (
            <span>{'Crypto'}<span style = {{fontWeight:100}}>{'trackr'}</span></span>
        );
    }

    render () {
        return (
            <AppBar
                style = {style}
                title = {this.title()}
                showMenuIconButton = {false}
                zDepth = {2}
            >
                <TabNavigation />
            </AppBar>
        );
    }
}

export default Navigation;
