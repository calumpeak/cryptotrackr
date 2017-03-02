'use strict';

import { createStore } from 'redux';
import rootReducer from 'ducks';

const store = createStore(rootReducer);

export default store;
