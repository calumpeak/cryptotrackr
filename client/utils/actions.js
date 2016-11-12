'use strict';

/**
 * Creates an action; a function that returns a pure object
 *
 * @method create
 * @for actions
 * @param {String} type Action 'type' e.g. ACTION_NAME
 * @param {Arguments} argNames further argument values
 * @return {Function} action
 */
const create = (type, ...argNames) => {
    return (...args) => {
        let action = { type };

        argNames.forEach((arg, index) => {
            action[argNames[index]] = args[index];
        });

        return action;
    };
};

/**
 * Helper function that can create actions en masse when provided with an array
 * Of objects that defines the actions name and arguments
 * Structure:
 *
 *  [{
 *      name: 'addItem',
 *      args: ['ADD_ITEM', 'item']
 *  }]
 *
 * Will return:
 *
 *  {
 *      addItem: (item) => ({ type: 'ADD_ITEM', item })
 *  }
 *
 * @method bulkCreate
 * @for actions
 * @param {Array} actionList
 * @param {String} actionList[0].name
 * @param {Array} actionList[0].args
 * @return {Object} actions
 */
const bulkCreate = (actionList) => {
    const actions = {};

    actionList.forEach((action) => {
        actions[action.name] = create.apply(null, action.args);
    });

    return actions;
};

export {
    create,
    bulkCreate
};
