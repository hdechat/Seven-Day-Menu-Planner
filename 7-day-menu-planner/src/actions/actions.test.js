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

      const actual = actions.fetchRecipesSuccess(cleanedPaleoRecipes);

      expect(actual).toEqual(expected);
    });
  });

  describe('Recipes Is Loading', () => {
    it('should have a type of RECIPES_IS_LOADING and return a boolean', () => {
      const expected = {
        type: 'RECIPES_IS_LOADING',
        recipesIsLoading: true
      };

      const actual = actions.recipesIsLoading(true);

      expect(actual).toEqual(expected);      
    });
  });

  describe('Recipes Has Errored', () => {
    it('should have a type of RECIPES_HAS_ERRORED and return a boolean', () => {
      const expected = {
        type: 'RECIPES_HAS_ERRORED',
        error: 'error message'
      };

      const actual = actions.recipesHasErrored('error message');

      expect(actual).toEqual(expected);
    });
  });

  describe('Add To Menu', () => {
    it('should have a type of ADD_TO_MENU AND return weekday, mealTime, and recipe Object', () => {
      const mockRecipe = {
        "image": "https://www.edamam.com/web-img/e50/e50584043c015a91a26a7a37f093d476",
        "ingredients": ["1½ pounds fresh red jalapeño peppers, stemmed, seeded, and roughly chopped", "8 garlic cloves, peeled and smashed", "⅓ cup apple cider vinegar", "3 tablespoons tomato paste", "3 tablespoons honey", "2 tablespoons Paleo-friendly fish sauce (Red Boat!)", "1½ teaspoons kosher salt"],
        "title": "Paleo Sriracha recipes",
        "url": "http://nomnompaleo.com/post/36060636540/paleo-sriracha"
      };

      const expected = {
        type: 'ADD_TO_MENU',
        weekday: 'monday',
        mealTime: 'breakfast',
        recipe: mockRecipe
      };

      const actual = actions.addToMenu('Monday', 'Breakfast', mockRecipe);

      expect(actual).toEqual(expected);
    });
  });

  describe('Add To Grocery List', () => {
    const mockIngredients = ["1½ pounds fresh red jalapeño peppers, stemmed, seeded, and roughly chopped", "8 garlic cloves, peeled and smashed", "⅓ cup apple cider vinegar", "3 tablespoons tomato paste", "3 tablespoons honey", "2 tablespoons Paleo-friendly fish sauce (Red Boat!)", "1½ teaspoons kosher salt"];

    it('should have a type of ADD_TO_GROCERY_LIST and return and array of ingredients', () => {
      const expected = {
        type: 'ADD_TO_GROCERY_LIST',
        ingredients: mockIngredients
      };

      const actual = actions.addToGroceryList(mockIngredients);

      expect(actual).toEqual(expected);
    });
  });
});








