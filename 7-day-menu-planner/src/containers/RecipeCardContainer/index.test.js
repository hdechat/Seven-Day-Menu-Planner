import { mapDispatchToProps } from './index.js';
import { addToFavorites } from '../../actions';

describe('RECIPE CARD CONTAINER', () => {
  it('should call dispatch with the addToFavorites action', () => {
    const mockRecipe = {
      "image": "https://www.edamam.com/web-img/e50/e50584043c015a9",
      "title": "Paleo Sriracha recipes",
      "url": "http://nomnompaleo.com/post/36060636540/paleo-sriracha"
    };

    const dispatch = jest.fn();
    const actionToDispatch = addToFavorites(mockRecipe);
    const mappedProps = mapDispatchToProps(dispatch);

    mappedProps.addToFavorites(mockRecipe);

    expect(dispatch).toHaveBeenCalledWith(actionToDispatch);
  });
});