import * as reducers from './recipesReducers.js';
import { chooseCategory, fetchRecipesSuccess, recipesIsLoading, recipesHasErrored } from '../../actions';
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

  it('should return category string when it receives the correct action', () => {
    const actual = reducers.recipesReducer(mockState, chooseCategory('paleo'));

    const expected = { results: [], category: 'paleo'}

    expect(actual).toEqual(expected);
  });

  it('should return results array of recipes object when it receives the correct action', () => {
    const expected = {results: [...cleanedPaleoRecipes]};

    const actual = reducers.recipesReducer(mockState, fetchRecipesSuccess(cleanedPaleoRecipes));

    expect(actual).toEqual(expected);
  });

  it('should return a boolean when it receives the correct action', () => {
    const expected = { results: [], recipesIsLoading: true}

    const actual = reducers.recipesReducer(mockState, recipesIsLoading(true));

    expect(actual).toEqual(expected);
  });


  it('should return a boolean when it receives the correct action', () => {
    const expected = { results: [], recipesHasErrored: true}

    const actual = reducers.recipesReducer(mockState, recipesHasErrored(true))
    expect(actual).toEqual(expected);
  });
});














