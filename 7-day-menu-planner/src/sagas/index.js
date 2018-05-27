import { call, put, takeLatest } from 'redux-saga/effects';
import fetchRecipes from '../api';
import { fetchRecipesSuccess, recipesHasErrored } from '../actions';
import { cleanData } from '../helpers';

export function* chooseCategory(action) {
  try {
    const results = yield call(fetchRecipes, action.category);
    const recipes = cleanData(results);
    yield put(fetchRecipesSuccess(recipes));
  } catch(error) {
    yield put(recipesHasErrored(error.message));
  }
}

export function* listenForChooseCategory() {
  yield takeLatest('CHOOSE_CATEGORY', chooseCategory);
}
