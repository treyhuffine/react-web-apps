const injectedState = window.__INJECTED_STATE__ || {};
const auth = window.__AUTH__ || {};

const initialState = {
  ...injectedState,
  auth,
};

export default initialState;
