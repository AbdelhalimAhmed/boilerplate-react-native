import { fetchData } from '../Api'
import { call, put } from 'redux-saga/effects'
import { receiveApiData } from '../Redux/UserRedux'
// worker Saga: will be fired on USER_FETCH_REQUESTED actions
export function * getApiData (action) {
  try {
    // do api call
    const data = yield call(fetchData)
    yield put(receiveApiData(data))
  } catch (e) {
    console.log(e)
  }
}
