import { call, put, takeEvery } from 'redux-saga/effects';
import { setToStorage, getDataFromStorage } from '../../api';

export function* addMenuItemToStorage(action) {
  let updatedMenu;
  const menu = yield call(getDataFromStorage, 'menu');
  menu
    ? updatedMenu = 
      [...menu, { [action.weekday]: {[action.mealTime]: action.recipe} }]
    : updatedMenu = 
      [{ [action.weekday]: {[action.mealTime]: action.recipe} }];
  yield call(setToStorage, 'menu', updatedMenu)
}

export function* removeMenuItemFromStorage(action) {
  const menu = yield call(getDataFromStorage, 'menu');
  const updatedMenu = menu.filter(item => {
    return JSON.stringify(item) !== 
      JSON.stringify({ [action.weekday]: {[action.mealTime]: action.recipe} })
  });
  yield call(setToStorage, 'menu', updatedMenu);
}


export function* listenForAddMenuItemToStorage() {
  yield takeEvery('ADD_MENU_ITEM_TO_STORAGE', addMenuItemToStorage);
}

export function* listenForRemoveMenuItemFromStorage() {
  yield takeEvery('REMOVE_MENU_ITEM_FROM_STORAGE', removeMenuItemFromStorage);
}
