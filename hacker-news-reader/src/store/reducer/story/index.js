import * as actionType from 'actions/story/actionType';

const initialState = {
  stories: []
};

export default (state = initialState, { type, payload = {} }) => {
  switch (type) {
    case actionType.FETCH_STORY_LIST:
      return state;
    default:
      return state;
  }
};
