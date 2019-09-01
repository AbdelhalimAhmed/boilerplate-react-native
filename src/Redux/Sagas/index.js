import {takeLatest} from 'redux-saga/effects';

import {types} from '../UserRedux';
import {getApiData} from './UserSaga';

export default function* mySaga() {
  yield takeLatest(types.REQUEST_API_DATA, getApiData);
}
