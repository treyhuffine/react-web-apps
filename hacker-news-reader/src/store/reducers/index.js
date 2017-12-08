import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import authReducer from './auth';
import storyReducer from './story';

export default combineReducers({
  auth: authReducer,
  router: routerReducer,
  story: storyReducer
});
