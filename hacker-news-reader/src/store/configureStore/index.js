import reducers from 'reducers';
import { createStore } from 'redux';
import initialState from './initialState';
import middleware from './configureMiddleware';

const store = createStore(reducers, initialState, middleware);

export default store;
