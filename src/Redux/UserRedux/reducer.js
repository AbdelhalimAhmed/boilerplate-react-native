import types from './types';

//create initial state
const initialState = {
  user: {},
};

//create reducer
export default (state = initialState, action) => {
  switch (action.type) {
    case types.RECEIVE_API_DATA:
      return action.user;
    default:
      return state;
  }
};
