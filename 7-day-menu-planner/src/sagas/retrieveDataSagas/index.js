import { call, put, takeEvery } from 'redux-saga/effects';
import { setToStorage, getDataFromStorage } from '../../api';
import * as actions from '../../actions';

export function* retrieveDataFromStorage(action) {
  switch (action.key) {
    case 'favorites':
      const favorites = yield call(getDataFromStorage, action.key);
      favorites
        ? yield put(actions.loadFavoritesToStore(favorites))
        : null;
      break;
    case 'groceryList':
      const groceryList = yield call(getDataFromStorage, action.key);
        groceryList
          ? yield put(actions.loadGroceryListToStore(groceryList))
          : null;
        break;
    case 'menu':
      const menu = yield call(getDataFromStorage, action.key);
        menu
          ? yield put(actions.loadMenuToStore(menu))
          : null;
        break;
    default:
      return
  }
}

export function* listenForRetrieveDataFromStorage() {
  yield takeEvery('RETRIEVE_DATA_FROM_STORAGE', retrieveDataFromStorage);
}
