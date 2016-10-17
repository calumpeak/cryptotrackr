'use strict';

import React, { PropTypes, Component } from 'react';
import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import MenuIcon from 'material-ui/svg-icons/navigation/menu';
import MenuItem from 'material-ui/MenuItem';
import Drawer from 'material-ui/Drawer';
import routes from 'router/routes';

const iconStyle = {
    width: 36,
    height: 36,
    color: '#FFF'
};

class DrawerNavigation extends Component {
    constructor (props, context) {
        super(props);

        this.context = context;
        this.state = {
            open: false
        };

        this.toggleDrawer = this.toggleDrawer.bind(this);
    }

    toggleDrawer () {
        this.setState({ open: !this.state.open });
    }

    render () {
        const { router } = this.context;

        return (
            <div>
                <IconButton
                    onTouchTap = {this.toggleDrawer} iconStyle = {iconStyle}>
                    <MenuIcon />
                </IconButton>
                <Drawer
                    width={250}
                    docked={false}
                    openSecondary={true}
                    open={this.state.open}
                    onRequestChange={this.toggleDrawer}
                >
                    <div>
                        <AppBar title = {'Menu'} showMenuIconButton = {false} />
                        {routes.map(route =>
                            <MenuItem
                                key = {route.title}
                                primaryText = {route.title}
                                leftIcon = {route.icon}
                                onTouchTap = {() => {
                                    router.push(route.path);
                                    this.toggleDrawer();
                                }}
                            />
                        )}
                    </div>
                </Drawer>
            </div>
        );
    }
}

DrawerNavigation.contextTypes = {
    router: PropTypes.object.isRequired
};

export default DrawerNavigation;
