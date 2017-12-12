import * as actionTypes from 'actions/story/actionTypes';

const initialState = {
  stories: [],
  isFetching: false
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case actionTypes.FETCH_STORIES_SUCCESS:
      return {
        ...state,
        stories: payload.stories
      };
    default:
      return state;
  }
};
