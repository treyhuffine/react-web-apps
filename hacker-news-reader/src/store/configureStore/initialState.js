const injectedState = window.__INJECTED_STATE__ || {};
const authedUser = window.__AUTHED_USER__ || {};

const initialState = {
  ...injectedState,
  authedUser
};

export default initialState;
