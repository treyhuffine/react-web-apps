import reducer from 'reducer';
import { createStore } from 'redux';
import initialState from './initialState';
import middleware from './configureMiddleware';

const store = createStore(reducer, initialState, middleware);

export default store;
