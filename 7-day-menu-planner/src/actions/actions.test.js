import * as actions from './index.js';
import { cleanedPaleoRecipes } from '../mock-data.js';

describe('Choose Category', () => {
  it('should have a type of CHOOSE_CATEGORY and return a category string', () => {
    const expected = {
      type: 'CHOOSE_CATEGORY',
      category: 'paleo'
    };

    const actual = actions.chooseCategory('paleo');

    expect(actual).toEqual(expected);
  });
});

describe('RECIPES ACTIONS', () => {
  describe('Fetch Recipes Success', () => {
    it('should have a type of FETCH_RECIPES_SUCCESS and return an array of cleaned recipe objects', () => {
      const expected = {
        type: 'FETCH_RECIPES_SUCCESS',
        recipes: cleanedPaleoRecipes
      };

      const actual = actions.fetchRecipesSuccess(cleanedPaleoRecipes)

      expect(actual).toEqual(expected);
    });
  });

  describe('Recipes Is Loading', () => {
    it('should have a type of RECIPES_IS_LOADING and return a boolean', () => {
      const expected = {
        type: 'RECIPES_IS_LOADING',
        recipesIsLoading: true
      }

      const actual = actions.recipesIsLoading(true);

      expect(actual).toEqual(expected);      
    });
  });

  describe('Recipes Has Errored', () => {
    it('should have a type of RECIPES_HAS_ERRORED and return a boolean', () => {
      const expected = {
        type: 'RECIPES_HAS_ERRORED',
        recipesHasErrored: true
      }

      const actual = actions.recipesHasErrored(true)

      expect(actual).toEqual(expected);
    });
  });
});