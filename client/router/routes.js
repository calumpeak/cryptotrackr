'use strict';

import React from 'react';

// Icons
import DashboardIcon from 'material-ui/svg-icons/Action/dashboard';
import StockIcon from 'material-ui/svg-icons/Action/trending-up';
import NewsIcon from 'material-ui/svg-icons/Action/subject';

const routes = [
    {
        path: '/dashboard',
        title: 'Dashboard',
        icon: <DashboardIcon style ={{color: 'inherit'}}/>,
        getComponent: (loc, callback) => {
            require.ensure([], (require) => {
                callback(null, require('pages/dashboard').default);
            }, 'dashboard');
        }
    },
    {
        path: '/market',
        title: 'Market',
        icon: <StockIcon style = {{color: 'inherit'}}/>,
        getComponent: (loc, callback) => {
            require.ensure([], (require) => {
                callback(null, require('pages/market').default);
            }, 'market');
        }
    },
    {
        path: '/news',
        title: 'News',
        icon: <NewsIcon style = {{color: 'inherit'}}/>,
        getComponent: (loc, callback) => {
            require.ensure([], (require) => {
                callback(null, require('pages/news').default);
            }, 'news');
        }
    }
];

export default routes;
