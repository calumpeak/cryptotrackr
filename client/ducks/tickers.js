'use strict';

// Namespace
const ns = 'TICKERS_';

// Action Types
const ADD       = `${ns}ADD`;
const REMOVE    = `${ns}REMOVE`;

// Initial State
const initalState = ['BTC:USD', 'ETH:USD', 'DASH:USD', 'XMR:USD', 'LTC:USD', 'AMP:BTC', 'DOGE:USD'];

// Reducer
export default function reducer (state = initalState, action) {
    switch (action.type) {
        case ADD:
            return [...state, action.tickerId];
        case REMOVE:
            return state.filter(ticker => ticker !== action.tickerId);
        default:
            return state;
    }
}

// Action Creators
export const addTicker = (tickerId) => ({ type: ADD, tickerID });
export const removeTicker = (tickerId) => ({ type: REMOVE, tickerId });
