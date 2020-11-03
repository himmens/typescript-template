import reducers from 'app/reducers';

export type StoreState = ReturnType<typeof reducers>;
export type DataState = StoreState['data'];
