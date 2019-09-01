import {combineReducers} from 'redux';

import {reducer as user} from './UserRedux';

// All reducers.
export default combineReducers({
  user,
});
