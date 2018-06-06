import { all } from 'redux-saga/effects';

import { listenForChooseCategory } from './chooseCategorySagas';
import { listenForAddFavoriteToStorage, 
  listenForRemoveFavoriteFromStorage } from './favoritesSagas';
import { listenForRetrieveDataFromStorage } from './retrieveDataSagas';
import { listenForAddGroceryListToStorage, 
  listenForRemoveGroceryListFromStorage } from './groceryListSagas';
import { listenForAddMenuItemToStorage, 
  listenForRemoveMenuItemFromStorage } from './menuItemSagas';

export default function* rootSaga() {
  yield all([
    listenForChooseCategory(),
    listenForRetrieveDataFromStorage(),
    listenForAddFavoriteToStorage(),
    listenForRemoveFavoriteFromStorage(),
    listenForAddGroceryListToStorage(),
    listenForRemoveGroceryListFromStorage(),
    listenForAddMenuItemToStorage(),
    listenForRemoveMenuItemFromStorage()
  ]);
}
