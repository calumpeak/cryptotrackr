'use strict';

import React, { PropTypes } from 'react';
import Tabs from 'material-ui/tabs/tabs';
import Tab from 'material-ui/tabs/tab';
import routes from 'router/routes';

const tabsStyle = {
    width: '300px',
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

const TabNavigation = () => (
    <Tabs style = {tabsStyle} inkBarStyle = {barStyle} tabItemContainerStyle = {tabStyle}>
        {routes.map(route =>
            <Tab key = {route.title} label = {
                <div>
                    <div style = {innerStyle}>{route.icon}</div>
                    <div style = {innerStyle}>{route.title}</div>
                </div>
            }/>
        )}
    </Tabs>
);

export default TabNavigation;
