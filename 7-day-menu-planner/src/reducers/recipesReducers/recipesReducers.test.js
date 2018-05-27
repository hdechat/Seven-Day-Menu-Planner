import * as reducers from './recipesReducers.js';
import { recipes, recipesIsLoading, recipesHasErrored } from '../../actions';
import { cleanedPaleoRecipes } from '../../mock-data.js';

describe('Fetch Recipes Success Reducer', () => {
  it('should return empty array if there is no given state', () => {
    const actual = reducers.recipesReducer(undefined, {});

    expect(actual).toEqual([]);
  });

  it('should return an array of recipes object when it receives the correct action', () => {
    const state = [{test: 'object'}];

    const expected = [{test: 'object'}, ...cleanedPaleoRecipes];

    const actual = reducers.recipesReducer(state, recipes(cleanedPaleoRecipes));

    expect(actual).toEqual(expected);
  });
});

describe('Recipes Is Loading Reducer', () => {
  it('should return false if there is no given state', () => {
    const actual = reducers.recipesIsLoadingReducer(undefined, {});

    expect(actual).toBe(false);
  });

  it('should return a boolean when it receives the correct action', () => {
    const state = false;
    const actual = reducers.recipesIsLoadingReducer(state, recipesIsLoading(true))
    expect(actual).toBe(true);
  });
});

describe('Recipes Has Errored Reducer', () => {
  it('should return false if there is no given state', () => {
    const actual = reducers.recipesHasErroredReducer(undefined, {});

    expect(actual).toBe(false);
  });

  it('should return a boolean when it receives the correct action', () => {
    const state = false;
    const actual = reducers.recipesHasErroredReducer(state, recipesHasErrored(true))
    expect(actual).toBe(true);
  });
});














