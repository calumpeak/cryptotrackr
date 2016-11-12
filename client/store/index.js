'use strict';

import { createStore, combineReducers } from 'redux';

import dashboard from 'pages/dashboard/reducers';

const store = createStore(combineReducers({
    dashboard
}));

export default store;
