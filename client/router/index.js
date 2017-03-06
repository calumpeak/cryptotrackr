'use strict';

import React, { PropTypes } from 'react';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';
import routes from './routes';
import Application from '../application';

const AppRouter = () => (
    <Router history = {hashHistory}>
        <Route path = '/' component = {Application}>
            <IndexRoute getComponent = {routes[0].getComponent} />
            {routes.map(route =>
                <Route key = {route.path} path = {route.path} getComponent = {route.getComponent} />
            )}
        </Route>
    </Router>
);

export default AppRouter;
