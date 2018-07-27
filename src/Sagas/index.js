import { takeLatest } from "redux-saga/effects";

import { REQUEST_API_DATA } from "../Redux/UserRedux";
import { getApiData } from './UserSaga'


export default function* mySaga() {
  yield takeLatest(REQUEST_API_DATA, getApiData);
}