import reducer from 'reducers';
import { createStore } from 'redux';
import initialState from 'store/configure-store/initial-state';
import middleware from 'store/configure-store/configure-middleware';

const store = createStore(reducer, initialState, middleware);

export default store;
