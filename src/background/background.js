/**
 * Background scripts entry point.
 * You can load other background scripts through this file.
 */
import { wrapStore } from 'react-chrome-redux';
import { applyMiddleware, compose, createStore } from 'redux';
import createSagaMiddleware from 'redux-saga';

import { APP_NAME } from '../constants/constants';
import rootReducer from '../redux/reducers';
import rootSaga from '../redux/sagas/rootSaga';

const sagaMiddleware = createSagaMiddleware();
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(rootReducer, composeEnhancers(applyMiddleware(sagaMiddleware))); // a normal Redux store

sagaMiddleware.run(rootSaga);

/**
 * wrapStore creates a proxy like system to enable normal
 * communication with redux store.
 */
wrapStore(store, { portName: APP_NAME });
