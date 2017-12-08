import * as actionTypes from 'actions/story/actionTypes';

const initialState = {
  storyIds: [],
  stories: [],
  isFetching: false
};

export default (state = initialState, { type, payload = {} }) => {
  switch (type) {
    case actionTypes.FETCH_TOP_STORIES_SUCCESS:
      return {
        ...state,
        storyIds: payload.storyIds
      };
    default:
      return state;
  }
};
