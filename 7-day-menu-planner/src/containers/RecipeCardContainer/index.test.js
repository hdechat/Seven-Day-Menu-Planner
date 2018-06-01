import { mapStateToProps, mapDispatchToProps } from './index.js';
import { toggleFavorites } from '../../actions';

describe('RECIPE CARD CONTAINER', () => {
  it('should call dispatch with the addToFavorites action', () => {
    const mockRecipe = {
      "image": "https://www.edamam.com/web-img/e50/e50584043c015a9",
      "title": "Paleo Sriracha recipes",
      "url": "http://nomnompaleo.com/post/36060636540/paleo-sriracha"
    };

    const dispatch = jest.fn();
    const actionToDispatch = toggleFavorites(mockRecipe);
    const mappedProps = mapDispatchToProps(dispatch);

    mappedProps.toggleFavorites(mockRecipe);

    expect(dispatch).toHaveBeenCalledWith(actionToDispatch);
  });

  it('should return the expected objected', () => {
    const mockState = {
      favorites: [{title: 'recipe name'}],
      recipes: {},
      menu: {},
      groceryList: []
    };

    const actual = mapStateToProps(mockState);

    const expected = {
      favorites: [{title: 'recipe name'}]
    };

    expect(actual).toEqual(expected);
  });
});