import * as actionType from 'actions/story/actionType';

const initialState = {
  stories: []
};

export default (state = initialState, { type, payload = {} }) => {
  switch (type) {
    case actionType.RECEIVE:
      return {};
    default:
      return state;
  }
};
