'use strict';

import React, { PropTypes, Component } from 'react';
import AppBar from 'material-ui/AppBar';
import Media from 'react-media';
import TabNavigation from './tab-navigation';
import DrawerNavigation from './drawer-navigation';

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
                <Media query = '(max-width: 550px)'>
                    {matches => matches
                        ? (<DrawerNavigation />)
                        : (<TabNavigation />)   
                    }
                </Media>

            </AppBar>
        );
    }
}

export default Navigation;
