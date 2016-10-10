'use strict';

import { Dashboard, Market } from 'pages';

const routes = [
    {
        index: true,
        path: '/dashboard',
        title: 'Dashboard',
        component: Dashboard
    },
    {
        path: '/market',
        title: 'Market',
        component: Market
    }
];

export default routes;
