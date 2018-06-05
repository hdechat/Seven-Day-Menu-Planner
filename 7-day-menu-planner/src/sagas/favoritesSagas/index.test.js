import * as sagas from './index.js';
import { call, put, takeEvery } from 'redux-saga/effects';
import { getDataFromStorage, setToStorage } from '../../api';

describe('addFavoriteToStorage', () => {
  let iterator;
  let mockAction;

  beforeAll(() => {
    mockAction = {
      type: 'ADD_FAVORITE_TO_STORAGE',
      recipe: {title: 'recipe name'}
    };

    iterator = sagas.addFavoriteToStorage(mockAction);
  });

  it('should yield call with getDataFromStorage and correct params', () => {
    //Need to learn out how to mock the getDatafromStorage call

    const value = iterator.next().value;

  });


  it('should yield call with setToStorage and correct params', () => {
    const mockUpdatedFavorites = [{title: 'recipe name'}]

    const expected = call(setToStorage, 'favorites', mockUpdatedFavorites);

    const value = iterator.next().value;

    expect(value).toEqual(expected);
  });

  
});

describe('removeFavoriteFromStorage', () => {
  let iterator;
  let mockAction;

  beforeAll(() => {
    mockAction = {
      type: 'REMOVE_FAVORITE_FROM_STORAGE',
      recipe: {title: 'recipe name'}
    };

    iterator = sagas.removeFavoriteFromStorage(mockAction);
  });

  it('should yield call with getDataFromStorage and correct params', () => {
    //Need to learn out how to mock the getDatafromStorage call

    const value = iterator.next().value;
  });


  it('should yield call with setToStorage and correct params', () => {
    const mockUpdatedFavorites = [{title: 'recipe name'}];

    const expected = call(setToStorage, 'favorites', []);

    const value = iterator.next(mockUpdatedFavorites).value;

    expect(value).toEqual(expected);
  });

  it('should be done', () => {
    const done = iterator.next().done;

    expect(done).toBe(true);
  });
});

describe('listenForAddFavoriteToStorage', () => {
  let iterator;

  beforeAll(() => {
    iterator = sagas.listenForAddFavoriteToStorage();
  });

  it('should yield takeEvery with the correct params', () => {
    const value = iterator.next().value;

    const expected = takeEvery('ADD_FAVORITE_TO_STORAGE', sagas.addFavoriteToStorage);

    expect(value).toEqual(expected);
  });

  it('should be done', () => {
    const done = iterator.next().done;

    expect(done).toBe(true);
  });
});

describe('listenForRemoveFavoriteFromStorage', () => {
  let iterator;

  beforeAll(() => {
    iterator = sagas.listenForRemoveFavoriteFromStorage();
  });

  it('should yield takeEvery with the correct params', () => {
    const value = iterator.next().value;

    const expected = takeEvery('REMOVE_FAVORITE_FROM_STORAGE', sagas.removeFavoriteFromStorage);

    expect(value).toEqual(expected);
  });

  it('should be done', () => {
    const done = iterator.next().done;

    expect(done).toBe(true);
  });
});