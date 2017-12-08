import * as actionType from 'actions/auth/actionType';

const initialState = {};

export default (state = initialState, { type, payload = {} }) => {
  switch (type) {
    case actionType.LOGIN:
      return state;
    default:
      return state;
  }
};
