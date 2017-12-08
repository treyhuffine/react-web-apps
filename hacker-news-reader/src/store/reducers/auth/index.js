import * as actionTypes from 'actions/auth/actionTypes';

const initialState = {};

export default (state = initialState, { type, payload = {} }) => {
  switch (type) {
    case actionTypes.LOGIN:
      return state;
    default:
      return state;
  }
};
