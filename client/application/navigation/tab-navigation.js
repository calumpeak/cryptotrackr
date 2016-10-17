'use strict';

import React, { PropTypes, Component } from 'react';
import Tabs from 'material-ui/tabs/tabs';
import Tab from 'material-ui/tabs/tab';
import routes from 'router/routes';
import _ from 'lodash';

const tabsStyle = {
    width: '450px',
    position: 'relative'
};

const barStyle = {
    bottom: '0px',
    position: 'absolute'
};

const tabStyle = {
    marginTop: '10px'
};

const innerStyle = {
    display: 'inline-block',
    verticalAlign: 'middle',
    margin: '5px'
};

class TabNavigation extends Component {
    constructor (props, context) {
        super (props);

        this.context = context;
        _.some(routes, (route, index) => route.path === context.location.pathname && (this.activeIndex = index));
    }

    render () {
        const { router } = this.context;

        return (
            <Tabs
                style = {tabsStyle}
                inkBarStyle = {barStyle}
                tabItemContainerStyle = {tabStyle}
                initialSelectedIndex ={ this.activeIndex}>
                {routes.map(route =>
                    <Tab
                        key = {route.title}
                        onActive = {() => router.push(route.path)}
                        label = {
                            <div>
                                <div style = {innerStyle}>{route.icon}</div>
                                <div style = {innerStyle}>{route.title}</div>
                            </div>
                        }
                    />
                )}
            </Tabs>
        );
    }
}

TabNavigation.contextTypes = {
    router: PropTypes.object.isRequired,
    location: PropTypes.object.isRequired
};

export default TabNavigation;
