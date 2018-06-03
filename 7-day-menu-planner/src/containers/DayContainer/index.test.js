import { mapStateToProps, mapDispatchToProps } from './index.js';
import { removeFromMenu, removeFromGroceryList } from '../../actions';


describe('Menu Calendar', () => {
  it('should return the prop object', () => {
    const mockState = {
      menu: {
        sunday: {
          breakfast: {title: 'Recipe Name'}
        }
      },
      recipes: {
        results: []
      }
    };

    const expected = {
      menu: {
        sunday: {
          breakfast: {title: 'Recipe Name'}
        }
      }
    };

    const mappedProps = mapStateToProps(mockState);

    expect(mappedProps).toEqual(expected);
  });

  it('should call dispatch with a removeFromMenu action', () => {
    const dispatch = jest.fn();
    const actionToDispatch = removeFromMenu('monday', 'breakfast');
    const mappedProps = mapDispatchToProps(dispatch);

    mappedProps.removeFromMenu('monday', 'breakfast');

    expect(dispatch).toHaveBeenCalledWith(actionToDispatch);
  });

  it('should call dispatch with a removeFromGroceryList action', () => {
    const dispatch = jest.fn();
    const actionToDispatch = removeFromGroceryList(['ingredients']);
    const mappedProps = mapDispatchToProps(dispatch);

    mappedProps.removeFromGroceryList(['ingredients']);

    expect(dispatch).toHaveBeenCalledWith(actionToDispatch);
  });
});