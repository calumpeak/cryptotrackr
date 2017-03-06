'use strict';

import { createStore } from 'redux';
import { subscribe } from 'utils/local-storage';
import rootReducer from 'ducks';

const store = createStore(rootReducer);

// Subscribe store to localStorage
subscribe(store);

export default store;
