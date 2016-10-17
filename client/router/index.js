'use strict';

import React, { PropTypes } from 'react';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';
import routes from './routes';
import Application from '../application';

const AppRouter = () => (
    <Router history = {hashHistory}>
        <Route path = '/' component = {Application}>
            <IndexRoute component = {routes[0].component} />
            {routes.map(route =>
                <Route key = {route.path} path = {route.path} component = {route.component} />
            )}
        </Route>
    </Router>
);

export default AppRouter;
