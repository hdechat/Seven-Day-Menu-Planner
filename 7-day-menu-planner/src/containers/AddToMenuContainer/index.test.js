import { mapDispatchToProps } from './index.js';
import { addToMenu } from '../../actions';

describe('Add To Menu Container', () => {
  it('should call dispatch with an addToMenu action', () => {
    const mockRecipe = {
      "image": "https://www.edamam.com/web-img/e50/e50584043c015a91a26a7a37f093d476",
      "title": "Paleo Sriracha recipes",
      "url": "http://nomnompaleo.com/post/36060636540/paleo-sriracha"
      }

    const dispatch = jest.fn();
    const actionToDispatch = addToMenu('monday', 'breakfast', mockRecipe);
    const mappedProps = mapDispatchToProps(dispatch);

    mappedProps.addToMenu('monday', 'breakfast', mockRecipe);

    expect(dispatch).toHaveBeenCalledWith(actionToDispatch);
  });
});