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
      "ingredients": [
        "1½ pounds fresh red jalapeño peppers, stemmed, seeded, and roughly chopped", 
        "8 garlic cloves, peeled and smashed", 
        "⅓ cup apple cider vinegar", 
        "3 tablespoons tomato paste", 
        "3 tablespoons honey", "2 tablespoons Paleo-friendly fish sauce (Red Boat!)", 
        "1½ teaspoons kosher salt"
      ],
      "title": "Paleo Sriracha recipes",
      "url": "http://nomnompaleo.com/post/36060636540/paleo-sriracha"
    };

    const expected = {
      type: 'ADD_TO_MENU',
      weekday: 'monday',
      mealTime: 'breakfast',
      recipe: mockRecipe
    };

    const actual = actions.addToMenu('monday', 'breakfast', mockRecipe);

    expect(actual).toEqual(expected);
  });
});

describe('Remove From Menu', () => {
  it('should have a type of REMOVE_FROM_MENU and return day and mealTime', () => {
    const expected = {
      type: 'REMOVE_FROM_MENU',
      day: 'monday',
      mealTime: 'breakfast'
    }

    const actual = actions.removeFromMenu('monday', 'breakfast')
  });
});

describe('Add To Grocery List', () => {
  const mockIngredients = [
    "1½ pounds fresh red jalapeño peppers, stemmed, seeded, and roughly chopped",
     "8 garlic cloves, peeled and smashed", 
     "⅓ cup apple cider vinegar", "3 tablespoons tomato paste", 
     "3 tablespoons honey", 
     "2 tablespoons Paleo-friendly fish sauce (Red Boat!)",
      "1½ teaspoons kosher salt"
    ];

  it('should have a type of ADD_TO_GROCERY_LIST and return an array of ingredients', () => {
    const expected = {
      type: 'ADD_TO_GROCERY_LIST',
      ingredients: mockIngredients
    };

    const actual = actions.addToGroceryList(mockIngredients);

    expect(actual).toEqual(expected);
  });
});

describe('Remove From Grocery List', () => {
  it('shoud have a type of REMOVE_FROM_GROCERY_LIST and return an array of ingredients', () => {

    const mockIngredients = [
      "1½ pounds fresh red jalapeño peppers, stemmed, seeded, and roughly chopped",
       "8 garlic cloves, peeled and smashed"
    ]

    const expected = {
      type: 'REMOVE_FROM_GROCERY_LIST',
      ingredients: mockIngredients
    }

    const actual = actions.removeFromGroceryList(mockIngredients);

    expect(actual).toEqual(expected);
  });
});

describe('Toggle Favorites', () => {
  const mockToggledRecipe = {
    image: 'image url',
    ingredients: ['ingredients'],
    title: 'recipe name',
    url: 'recipe url'
  };

  it('should have a type of TOGGLE_FAVORITES and return a recipe object', () => {
    const expected = {
      type: 'TOGGLE_FAVORITES',
      toggledRecipe: mockToggledRecipe
    };

    const actual = actions.toggleFavorites(mockToggledRecipe);

    expect(actual).toEqual(expected);
  });
});

describe('Retrieve Data From Storage', () => {
  it('should have a type of RETRIEVE_DATA_FROM_STORAGE', () => {
    const expected = {
      type: 'RETRIEVE_DATA_FROM_STORAGE',
      key: 'favorites'
    };

    const actual = actions.retrieveDataFromStorage('favorites');

    expect(actual).toEqual(expected);
  });
});

describe('Load Favorites To Store', () => {
  it('should have a type of LOAD_FAVORITES_TO_STORE and a favorites array', () => {
    const expected = {
      type: 'LOAD_FAVORITES_TO_STORE',
      favorites: [{title: 'recipe'}]
    };

    const actual = actions.loadFavoritesToStore([{title: 'recipe'}]);

    expect(actual).toEqual(expected);
  });
});

describe('Load Grocery List To Storage', () => {
  it('should have a type of LOAD_GROCERY_LIST_TO_STORE and groceryList array', () => {
    const expected = {
      type: 'LOAD_GROCERY_LIST_TO_STORE',
      groceryList: ['apples']
    };

    const actual = actions.loadGroceryListToStore(['apples']);

    expect(actual).toEqual(expected);
  });
});

describe('Load Menu To Store', () => {
  it('should have a type LOAD_MENU_TO_STORE and menu object', () => {
    const mockStoredMenu = [
      {sunday: {breakfast: {title: 'recipe name'}}}, 
      {monday: {lunch: {title: 'recipe name'}}}
    ];

    const expected = {
      type: 'LOAD_MENU_TO_STORE',
      menu: mockStoredMenu
    };

    const actual = actions.loadMenuToStore(mockStoredMenu);
  });
});

describe('Add Favorite To Storage', () => {
  it('should have a type of ADD_FAVORITE_TO_STORAGE and a recipe object', () => {
    const mockRecipe = {title: 'recipe name'};

    const expected = {
      type: 'ADD_FAVORITE_TO_STORAGE',
      recipe: mockRecipe
    };

    const actual = actions.addFavoriteToStorage(mockRecipe);

    expect(actual).toEqual(expected);
  });
});

describe('Remove Favorite From Storage', () => {
  it('should have a type of REMOVE_FAVORITE_FROM_STORAGE and a recipe object', () => {
    const mockRecipe = {title: 'recipe name'};

    const expected = {
      type: 'REMOVE_FAVORITE_FROM_STORAGE',
      recipe: mockRecipe
    };

    const actual = actions.removeFavoriteFromStorage(mockRecipe);

    expect(actual).toEqual(expected);
  });
});

describe('Add Grocery List To Storage', () => {
  it('should have a type of ADD_GROCERY_LIST_TO_STORAGE', () => {
    const expected = {
      type: 'ADD_GROCERY_LIST_TO_STORAGE',
      groceryList: ['apples']
    };

    const actual = actions.addGroceryListToStorage(['apples']);

    expect(actual).toEqual(expected);
  });
});

describe('Remove Grocery List From Storage', () => {
  it('should have a type of REMOVE_GROCERY_LIST_FROM_STORAGE', () => {
    const expected = {
      type: 'REMOVE_GROCERY_LIST_FROM_STORAGE',
      groceryList: ['apples']
    };

    const actual = actions.removeGroceryListFromStorage(['apples']);

    expect(actual).toEqual(expected);
  });
});

describe('Add Menu Item To Storage', () => {
  it('should have a type of ADD_MENU_ITEM_TO_STORAGE', () => {
    const expected = {
      type: 'ADD_MENU_ITEM_TO_STORAGE',
      weekday: 'sunday',
      mealTime: 'breakfast',
      recipe: {title: 'recipe name'}
    };

    const actual = actions.addMenuItemToStorage('sunday', 'breakfast', {title: 'recipe name'});

    expect(actual).toEqual(expected);
  });
});

describe('Remove Menu Item From Storage', () => {
  it('should have a type of REMOVE_MENU_ITEM_FROM_STORAGE', () => {
    const expected = {
      type: 'REMOVE_MENU_ITEM_FROM_STORAGE',
      weekday: 'sunday',
      mealTime: 'breakfast'
    };

    const actual = actions.removeMenuItemFromStorage('sunday', 'breakfast');

    expect(actual).toEqual(expected);
  });
});






