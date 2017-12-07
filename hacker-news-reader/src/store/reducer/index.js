import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import storyReducer from './story';

export default combineReducers({
  router: routerReducer,
  story: storyReducer
});
