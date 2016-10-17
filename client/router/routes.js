'use strict';

import React from 'react';
import { Dashboard, Market } from 'pages';

// Icons
import AppIcon from 'material-ui/svg-icons/Navigation/apps';
import StockIcon from 'material-ui/svg-icons/Action/trending-up';

const routes = [
    {
        path: '/dashboard',
        title: 'Dashboard',
        component: Dashboard,
        icon: <AppIcon style ={{color: 'inherit'}}/>
    },
    {
        path: '/market',
        title: 'Market',
        component: Market,
        icon: <StockIcon style = {{color: 'inherit'}}/>
    }
];

export default routes;
