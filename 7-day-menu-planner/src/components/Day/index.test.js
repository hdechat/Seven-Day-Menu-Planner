import React from 'react';
import Day from './index.js';
import { shallow } from 'enzyme';

describe('Day', () => {
  let wrapper;
  let mockMenu;
  let mockRemoveFromMenu;
  let mockRemoveFromGroceryList;
  let mockRemoveMenuItemFromStorage;
  let mockRemoveGroceryListFromStorage;

  beforeEach(() => {
    mockRemoveFromMenu = jest.fn();
    mockRemoveFromGroceryList = jest.fn();
    mockRemoveGroceryListFromStorage = jest.fn();
    mockRemoveMenuItemFromStorage = jest.fn();

    mockMenu = {
      sunday: {
        breakfast: {title: 'Recipe Name', ingredients: ['apples']},
        lunch: {},
        dinner: {}
      }
    };
    wrapper = shallow(<Day 
      day='sunday' 
      removeFromGroceryList={mockRemoveFromGroceryList} 
      removeFromMenu={mockRemoveFromMenu} 
      menu={mockMenu}
      removeGroceryListFromStorage={mockRemoveGroceryListFromStorage}
      removeMenuItemFromStorage={mockRemoveMenuItemFromStorage}/>);
  });

  it('matches snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('calls removeFromMenu on button click', () => {
    wrapper.find('button').at(0).simulate('click')

    expect(mockRemoveFromMenu).toHaveBeenCalledWith('sunday', 'breakfast');
    expect(mockRemoveFromGroceryList).toHaveBeenCalledWith(['apples']);
    expect(mockRemoveMenuItemFromStorage).
    toHaveBeenCalledWith('sunday', 'breakfast',  
      {ingredients: ['apples'], title: 'Recipe Name'});
    expect(mockRemoveGroceryListFromStorage).toHaveBeenCalledWith(['apples']);
  });
});
