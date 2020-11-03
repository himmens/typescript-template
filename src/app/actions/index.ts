import api from 'app/api';
import { ACTION } from 'app/constants/action';
import type { GetInitialDataAction } from 'app/types';

/**
 * Action for getting initial data.
 *
 * @returns {GetInitialDataAction}
 */
function getInitialData(): GetInitialDataAction {
    return {
        types: [ACTION.GET_INITIAL_DATA, ACTION.GET_INITIAL_DATA_SUCCESS, ACTION.GET_INITIAL_DATA_FAIL],
        fetching: api.getData()
    };
}

export default {
    getInitialData
};
