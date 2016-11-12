'use strict';

import { nameSpace } from '../constants';

const initalState = ['BTC:USD', 'ETH:USD', 'DASH:USD', 'XMR:USD', 'LTC:USD', 'NAV:BTC', 'MAID:BTC', 'AMP:BTC', 'DOGE:USD'];

const tickerReducer = (state = initalState, action) => {
    switch (action.type) {
        case `${nameSpace}_ADD_TICKER`:
            return [...state, action.tickerId];
        case `${nameSpace}_REMOVE_TICKER`:
            return state.filter(ticker => ticker !== action.tickerId);
        default:
            return state;
    }
};

export default tickerReducer;
