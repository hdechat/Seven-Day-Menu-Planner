import { mapDispatchToProps } from './index.js';
import { addToMenu, addToGroceryList } from '../../actions';

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

  it('should call dispatch with an addToGroceryList action', () => {
    const mockIngredients = ["1½ pounds fresh red jalapeño peppers, stemmed, seeded, and roughly chopped", "8 garlic cloves, peeled and smashed", "⅓ cup apple cider vinegar", "3 tablespoons tomato paste", "3 tablespoons honey", "2 tablespoons Paleo-friendly fish sauce (Red Boat!)", "1½ teaspoons kosher salt"];

    const dispatch = jest.fn();
    const actionToDispatch = addToGroceryList(mockIngredients);
    const mappedProps = mapDispatchToProps(dispatch);

    mappedProps.addToGroceryList(mockIngredients);

    expect(dispatch).toHaveBeenCalledWith(actionToDispatch);
  });
});