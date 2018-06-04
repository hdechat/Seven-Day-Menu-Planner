import * as sagas from './index.js';
import { call, put, takeLatest, takeEvery } from 'redux-saga/effects';
import fetchRecipes, { getDataFromStorage, setToStorage } from '../api';
import { fetchRecipesSuccess, recipesIsLoading, recipesHasErrored, loadFavoritesToStore } from '../actions';
import { cleanedPaleoRecipes, paleo } from '../mock-data.js';


describe('chooseCategory', () => {
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
    };

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

  it('should be done', () => {
    const done = iterator.next().done;

    expect(done).toBe(true);
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

describe('retrieveDataFromStorage', () => {
  let iterator;
  let mockAction;

  beforeAll(() => {
    mockAction = {
      type: 'RETRIEVE_DATA_FROM_STORAGE',
      kdy: 'favorites'
    };

    iterator = sagas.retrieveDataFromStorage(mockAction);
  });

  it('should yield call with getDataFromStorage and correct params', () => {
    //Need to learn out how to mock the getDatafromStorage call

    const value = iterator.next().value;
  });


  // it('should yield put with loadFavoritesToStore with correct params', () => {
  //   const expected = put(loadFavoritesToStore());
  //   const value = iterator.next().value;

  //   expect(value).toEqual(expected);
  // });

  // it('should be done', () => {
  //   const done = iterator.next().done;

  //   expect(done).toBe(true);
  // });
});

//LISTENERS
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

describe('listenForRetrieveDataFromStorage', () => {
  let iterator;

  beforeAll(() => {
    iterator = sagas.listenForRetrieveDataFromStorage();
  });

  it('should yield takeEvery with the correct params', () => {
    const value = iterator.next().value;

    const expected = takeEvery('RETRIEVE_DATA_FROM_STORAGE', sagas.retrieveDataFromStorage);

    expect(value).toEqual(expected);
  });

  it('should be done', () => {
    const done = iterator.next().done;

    expect(done).toBe(true);
  });
});

describe('listenForAddGroceryListToStorage', () => {
  let iterator;

  beforeAll(() => {
    iterator = sagas.listenForAddGroceryListToStorage();
  });

  it('should yield takeEvery with the correct params', () => {
    const value = iterator.next().value;

    const expected = takeEvery('ADD_GROCERY_LIST_TO_STORAGE', sagas.addGroceryListToStorage);

    expect(value).toEqual(expected);
  });

  it('should be done', () => {
    const done = iterator.next().done;

    expect(done).toBe(true);
  });
});

describe('listenForRemoveGroceryListFromStorage', () => {
  let iterator;

  beforeAll(() => {
    iterator = sagas.listenForRemoveGroceryListFromStorage();
  });

  it('should yield takeEvery with the correct params', () => {
    const value = iterator.next().value;

    const expected = takeEvery('REMOVE_GROCERY_LIST_FROM_STORAGE', sagas.removeGroceryListFromStorage);

    expect(value).toEqual(expected);
  });

  it('should be done', () => {
    const done = iterator.next().done;

    expect(done).toBe(true);
  });
});

