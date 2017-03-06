'use strict';

const storageKey = 'CRYPTOTRAKR';

/**
 * Gets the last stored store at runtime
 *
 * @function lastStored
 * @return {Object} store
 */
export const lastStored = (() => {
    let data = window.localStorage.getItem(storageKey);

    if (!data) {
        return {};
    }

    try {
        data = JSON.parse(decodeURIComponent(data));
    } catch (e) {
        return {};
    }

    return data;
})();

/**
 * Subscribe to changes in store and update localstorage with new state
 *
 * @function subscribe
 * @param {Object} store
 */
export const subscribe = (store) => {
    // On change update localstorage
    store.subscribe(() => {
        const data = encodeURIComponent(JSON.stringify(store.getState()));

        window.localStorage.setItem(storageKey, data);
    });
};
