import { ACTION } from 'app/constants/action';
import type {
    ActionRequestInitial,
    ReducerRequestActions,
    ReducerRequestActionInitial,
    ReducerRequestActionSuccess,
    ReducerRequestActionError
} from 'app/types';

export type DataResponse = {
    value: string
};

type GetInitialDataSteps = {
    initial: typeof ACTION.GET_INITIAL_DATA,
    success: typeof ACTION.GET_INITIAL_DATA_SUCCESS,
    fail: typeof ACTION.GET_INITIAL_DATA_FAIL,
    response: DataResponse,
    params: unknown
};

export type GetInitialDataReducerActions = ReducerRequestActions<GetInitialDataSteps>;
export type GetInitialDataAction = ActionRequestInitial<GetInitialDataSteps>;
export type GetInitialDataActionInitial = ReducerRequestActionInitial<GetInitialDataSteps>;
export type GetInitialDataActionSuccess = ReducerRequestActionSuccess<GetInitialDataSteps>;
export type GetInitialDataActionError = ReducerRequestActionError<GetInitialDataSteps>;
