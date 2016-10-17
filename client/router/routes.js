'use strict';

import React from 'react';
import { Dashboard, Market, News } from 'pages';

// Icons
import DashboardIcon from 'material-ui/svg-icons/Action/dashboard';
import StockIcon from 'material-ui/svg-icons/Action/trending-up';
import NewsIcon from 'material-ui/svg-icons/Action/subject';

const routes = [
    {
        path: '/dashboard',
        title: 'Dashboard',
        component: Dashboard,
        icon: <DashboardIcon style ={{color: 'inherit'}}/>
    },
    {
        path: '/market',
        title: 'Market',
        component: Market,
        icon: <StockIcon style = {{color: 'inherit'}}/>
    },
    {
        path: '/news',
        title: 'News',
        component: News,
        icon: <NewsIcon style = {{color: 'inherit'}}/>
    }
];

export default routes;
