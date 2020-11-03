import { createStore, applyMiddleware, compose } from 'redux';
import fetching from './middleware/fetching';
import reducers from 'app/reducers';

const configureStore = (initialState: {}): any => {
    let composeEnhancers = compose;
    const middleware = [
        fetching
    ];

    if (process.env.NODE_ENV !== 'production') {
        // If Redux DevTools Extension is installed use it, otherwise use Redux compose
        if (window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) { // eslint-disable-line no-underscore-dangle
            composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}); // eslint-disable-line no-underscore-dangle
        }
    }

    const enhancer = composeEnhancers(applyMiddleware(...middleware));
    const store = createStore(reducers, initialState, enhancer);

    if (module.hot) {
        module.hot.accept('../reducers', () => {
            store.replaceReducer(require('../reducers').default);
        });
    }

    return store;
};

export {
    configureStore
};
