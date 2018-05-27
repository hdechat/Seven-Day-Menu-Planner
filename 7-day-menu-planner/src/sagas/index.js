import { call, put, takeLatest } from 'redux-saga/effects';
import { fetchRecipes } from '../api';
import { chooseCategory } from '../actions';

export function* chooseCategory(action) {
  try {
    const data = yield call(fetchRecipes, action.category)
  }
}









// export function* submitUserLogin(action) {
//   try {
//     const user = yield call(API.postLoginUser, action.email, action.password)
//     yield put(actions.loginUser(user))
//   } catch(error) {
//     yield put(actions.loginError(error.message))
//   }
// }

// export function* listenForSubmitUserLogin() {
//   yield takeLatest('SUBMIT_USER_LOGIN', submitUserLogin)
// }

// export default listenForSubmitUserLogi