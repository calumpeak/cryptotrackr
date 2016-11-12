'use strict';

import { bulkCreate } from 'utils/actions';
import { nameSpace } from '../constants';

const actionList = [
    {
        name: 'addTicker',
        args: [`${nameSpace}_ADD_TICKER`, 'tickerId']
    },
    {
        name: 'removeTicker',
        args: [`${nameSpace}_REMOVE_TICKER`, 'tickerId']
    }
];

export default bulkCreate(actionList);
