export const REQUEST_API_DATA = "REQUEST_API_DATA";
export const RECEIVE_API_DATA = "RECEIVE_API_DATA";

export const requestApiData = () => ({ type: REQUEST_API_DATA });
export const receiveApiData = user => ({ type: RECEIVE_API_DATA, user });

export default (state = {}, action) => {
  switch (action.type) {
    case RECEIVE_API_DATA:
      return action.user
    default:
      return state
  }
}
