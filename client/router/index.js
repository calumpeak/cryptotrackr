'use strict';

import React, { PropTypes } from 'react';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';
import routes from './routes';
import Application from '../application';

const AppRouter = () => (
    <Router history = {hashHistory}>
        <Route path = '/' component = {Application}>
            {routes.map(route => (
                route.index
                    ? <IndexRoute key = {route.path} component = {route.component} />
                    : <Route key = {route.path} component = {route.component} />
            ))}
        </Route>
    </Router>
);

export default AppRouter;
