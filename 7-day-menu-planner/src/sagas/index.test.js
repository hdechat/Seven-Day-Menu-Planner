import * as sagas from './index.js';
import { call, put, takeLatest } from 'redux-saga/effects';
import fetchRecipes from '../api';
import { fetchRecipesSuccess, recipesIsLoading, recipesHasErrored } from '../actions';
import { cleanedPaleoRecipes, paleo } from '../mock-data.js';

describe('listenForChooseCategory', () => {
  let iterator;

  beforeAll(() => {
    iterator = sagas.listenForChooseCategory();
  });

  it('should yield takeLatest with the correct params', () => {
    const value = iterator.next().value;

    const expected = takeLatest('CHOOSE_CATEGORY', sagas.chooseCategory);

    expect(value).toEqual(expected);
  });

  it('should be done', () => {
    const done = iterator.next().done;

    expect(done).toBe(true);
  });

});

describe('chooseCategory happy path', () => {
  let iterator;
  let mockAction;

  beforeAll(() => {
    mockAction = {
      type: 'CHOOSE_CATEGORY',
      category: 'paleo'
    };

    iterator = sagas.chooseCategory(mockAction);
  });

  it('should yield put with recipesIsLoading with param of true', () => {
    const expected = put(recipesIsLoading(true));

    const value = iterator.next().value;

    expect(value).toEqual(expected);
  });


  it('should yield call with fetchRecipes and correct params', () => {
    const expected = call(fetchRecipes, mockAction.category);

    const value = iterator.next().value;

    expect(value).toEqual(expected);
  });

  it('should yield put with the FETCH_RECIPES_SUCCESS action', () => {
    const mockResults = paleo;

    const expected = put(fetchRecipesSuccess(cleanedPaleoRecipes));

    const value = iterator.next(mockResults).value;

    expect(value).toEqual(expected);
  });

  it('should yield put with recipesIsLoading with param of false', () => {
    const expected = put(recipesIsLoading(false));

    const value = iterator.next().value;

    expect(value).toEqual(expected);
  });
});

describe('chooseCategory on error', () => {
  let iterator;
  let mockAction;

  beforeAll(() => {
    mockAction = {
      type: 'CHOOSE_CATEGORY',
      category: 'paleo'
    }

    iterator = sagas.chooseCategory(mockAction);
    iterator.next();
  });

  it('should yield an error on error', () => {
    const expected = put(recipesHasErrored('There was an error'));

    const value = iterator.throw(Error('There was an error')).value;

    expect(value).toEqual(expected);
  });

  it('should be done', () => {
    const done = iterator.next().done;

    expect(done).toBe(true);
  });

});
