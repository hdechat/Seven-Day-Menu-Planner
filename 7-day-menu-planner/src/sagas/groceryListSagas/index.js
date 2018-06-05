import { call, put, takeEvery } from 'redux-saga/effects';
import { setToStorage, getDataFromStorage } from '../../api';

export function* addGroceryListToStorage(action) {
  let updatedGroceryList;
  const groceryList = yield call(getDataFromStorage, 'groceryList');
  groceryList
    ? updatedGroceryList = [...groceryList, ...action.groceryList]
    : updatedGroceryList = action.groceryList;
  yield call(setToStorage, 'groceryList', updatedGroceryList);
}

export function* removeGroceryListFromStorage(action) {
  const groceryList = yield call(getDataFromStorage, 'groceryList');
  const updatedGroceryList = groceryList.filter(ingred => 
    !action.groceryList.includes(ingred));
  yield call(setToStorage, 'groceryList', updatedGroceryList);
}

export function* listenForAddGroceryListToStorage() {
  yield takeEvery('ADD_GROCERY_LIST_TO_STORAGE', addGroceryListToStorage);
}

export function* listenForRemoveGroceryListFromStorage() {
  yield takeEvery('REMOVE_GROCERY_LIST_FROM_STORAGE', removeGroceryListFromStorage);
}