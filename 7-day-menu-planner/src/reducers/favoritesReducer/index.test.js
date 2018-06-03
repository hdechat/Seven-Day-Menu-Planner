import * as reducers from './index.js';
import { toggleFavorites, loadFavoritesFromStorage } from '../../actions';

describe('Favorites Reducer', () => {
  let mockState;

  beforeEach(() => {
    mockState = [];
  });

  it('should return initialState if there is no given state', () => {

    const actual = reducers.favoritesReducer(undefined, {});

    expect(actual).toEqual(mockState);
  });

  it('should add the recipe to the array, if it is not already there, with the toggleFavorites action', () => {
    const mockFavoritedRecipe = {
      "image": "https://www.edamam.com/web-img/e50/e50584043c015a91a26a7",
      "title": "Paleo Sriracha recipes",
      "url": "http://nomnompaleo.com/post/36060636540/paleo-sriracha"
    };

    const expected = [...mockState, mockFavoritedRecipe];

    const actual = reducers.favoritesReducer(mockState, toggleFavorites(mockFavoritedRecipe));

    expect(actual).toEqual(expected);
  });

  it('should remove the recipe from the array, if it is already there, with the toggleFavorites action', () => {
    const mockFavoritedRecipe = {
      "image": "https://www.edamam.com/web-img/e50/e50584043c015a91a26a7",
      "title": "Paleo Sriracha recipes",
      "url": "http://nomnompaleo.com/post/36060636540/paleo-sriracha"
    };

    const mockState = [mockFavoritedRecipe];

    const expected = [];

    const actual = reducers.favoritesReducer(mockState, toggleFavorites(mockFavoritedRecipe));

    expect(actual).toEqual(expected);
  });

  it('should add recipes to the array with the loadFavoritesFromStorage action', () => {
    const mockFavoritesFromStorage = [{title: 'recipe'}]

    const expected = mockFavoritesFromStorage;

    const actual = reducers.favoritesReducer(mockState, loadFavoritesFromStorage(mockFavoritesFromStorage));

    expect(actual).toEqual(expected);
  });
});