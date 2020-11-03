import { ACTION, REQUEST } from 'app/constants';
import type {
    GetInitialDataReducerActions,
    GetInitialDataActionSuccess,
    GetInitialDataActionError,
    ResponseState,
    ResponseError
} from 'app/types';

type State = {
    state: ResponseState,
    error: ResponseError | null,
    data: { value: string } | null
};

export const initialState: State = {
    state: REQUEST.INITIAL,
    error: null,
    data: null
};

type Action = GetInitialDataReducerActions;

/**
 * Function for handling `GET_INITIAL_DATA` action
 *
 * @param {State} state
 * @returns {State}
 */
function getInitialData(state: State): State {
    return {
        ...state,
        state: REQUEST.LOADING
    };
}

/**
 * Function for handling `GET_INITIAL_DATA_SUCCESS` action
 *
 * @param {State} state
 * @param {GetInitialDataActionSuccess} action
 * @returns {State}
 */
function getInitialDataSuccess(state: State, action: GetInitialDataActionSuccess): State {
    const data = action.response;

    return {
        ...state,
        state: REQUEST.SUCCESS,
        data
    };
}

/**
 * Function for handling `GET_INITIAL_DATA_FAIL` action
 *
 * @param {State} state
 * @param {GetInitialDataActionError} action
 * @returns {State}
 */
function getInitialDataFail(state: State, action: GetInitialDataActionError): State {
    return {
        ...state,
        state: REQUEST.ERROR,
        error: {
            code: action.error.code,
            message: action.error.message,
            status: action.error.status
        }
    };
}

/**
 * User reducer function
 *
 * @param {State} state
 * @param {Action} action
 * @returns {State}
 */
export default function reducer(state: State = initialState, action: Action): State {
    switch (action.type) {
        case ACTION.GET_INITIAL_DATA:
            return getInitialData(state);

        case ACTION.GET_INITIAL_DATA_SUCCESS:
            return getInitialDataSuccess(state, action as GetInitialDataActionSuccess);

        case ACTION.GET_INITIAL_DATA_FAIL:
            return getInitialDataFail(state, action as GetInitialDataActionError);

        default:
            return state;
    }
}
