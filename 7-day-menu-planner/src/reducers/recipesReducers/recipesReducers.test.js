import * as reducers from './recipesReducers.js';
import { fetchRecipesSuccess, recipesIsLoading, recipesHasErrored } from '../../actions';
import { cleanedPaleoRecipes } from '../../mock-data.js';

describe('Recipes Reducer', () => {
  let mockState;

  beforeEach(() => {
    mockState = { results: [] }
  });

  it('should return initialState if there is no given state', () => {
    const actual = reducers.recipesReducer(undefined, {});

    expect(actual).toEqual(mockState);
  });

  it('should return results array of recipes object when it receives the correct action', () => {
    const state = {results: [{test: 'object'}]};

    const expected = {results: [...cleanedPaleoRecipes]};

    const actual = reducers.recipesReducer(state, fetchRecipesSuccess(cleanedPaleoRecipes));

    expect(actual).toEqual(expected);
  });

  it('should return a boolean when it receives the correct action', () => {
    const state = { results: [] };

    const expected = { results: [], recipesIsLoading: true}

    const actual = reducers.recipesReducer(state, recipesIsLoading(true));

    expect(actual).toEqual(expected);
  });


  it('should return a boolean when it receives the correct action', () => {
    const state = { results: [] };

    const expected = { results: [], recipesHasErrored: true}

    const actual = reducers.recipesReducer(state, recipesHasErrored(true))
    expect(actual).toEqual(expected);
  });
});














