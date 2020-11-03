export type ErrorResponseFormat = {
    code: string,
    status: number,
    message?: string,
    data?: { [id: string]: unknown }
};

type Steps = {
    initial: string,
    success: string,
    fail: string,
    response: unknown,
    params: unknown
};

export type ActionRequestInitial<T extends Steps> = {
    types: Array<T['initial'] | T['success'] | T['fail']>,
    fetching: Promise<T['response']>
} & T['params'];

export type ReducerRequestActionInitial<T extends Steps> = {
    type: T['initial']
} & T['params'];

export type ReducerRequestActionSuccess<T extends Steps> = {
    type: T['success'],
    response: T['response'],
} & T['params'];

export type ReducerRequestActionError<T extends Steps> = {
    type: T['fail'],
    error: ErrorResponseFormat,
    response: { [id: string]: unknown },
} & T['params'];

export type ReducerRequestActions<T extends Steps> =
    | ReducerRequestActionInitial<T>
    | ReducerRequestActionSuccess<T>
    | ReducerRequestActionError<T>;
