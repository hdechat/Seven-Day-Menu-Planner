import { call, put, takeLatest } from 'redux-saga/effects';
import fetchRecipes from '../../api';
import * as actions from '../../actions';
import { cleanData } from '../../helpers';

export function* chooseCategory(action) {
  try {
    yield put(actions.recipesIsLoading(true));
    const results = yield call(
      fetchRecipes, 
      action.lang, 
      action.category, 
      action.filter
    );
    const recipes = cleanData(results);
    yield put(actions.fetchRecipesSuccess(recipes));
    yield put(actions.recipesIsLoading(false));
  } catch (error) {
    yield put(actions.recipesHasErrored(error.message));
  }
}

export function* listenForChooseCategory() {
  yield takeLatest('CHOOSE_CATEGORY', chooseCategory);
}