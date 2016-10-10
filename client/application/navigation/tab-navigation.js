'use strict';

import React, { PropTypes } from 'react';
import Tabs from 'material-ui/tabs/tabs';
import Tab from 'material-ui/tabs/tab';
import routes from 'router/routes';

const tabsStyle = {
    width: '350px',
    position: 'relative'
};

const barStyle = {
    bottom: '0px',
    position: 'absolute'
};

const tabStyle = {
    marginTop: '10px'
};

const TabNavigation = () => (
    <Tabs style = {tabsStyle} inkBarStyle = {barStyle} tabItemContainerStyle = {tabStyle}>
        {routes.map(route =>
            <Tab key = {route.title} label = {route.title} />
        )}
    </Tabs>
);

export default TabNavigation;
