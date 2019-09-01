import types from './types';
//create actions
export default {
  requestApiData: () => ({type: types.REQUEST_API_DATA}),
  receiveApiData: user => ({type: types.RECEIVE_API_DATA, user}),
};
