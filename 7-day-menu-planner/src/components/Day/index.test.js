import React from 'react';
import Day from './index.js';
import { shallow } from 'enzyme';

describe('Day', () => {
  let wrapper;
  let mockMenu;
  let mockRemoveFromMenu;
  let mockRemoveFromGroceryList;

  beforeEach(() => {
    mockRemoveFromMenu = jest.fn();
    mockRemoveFromGroceryList = jest.fn();

    mockMenu = {
      sunday: {
        breakfast: {title: 'Recipe Name', ingredients: ['apples']},
        lunch: {},
        dinner: {}
      }
    };
    wrapper = shallow(<Day day='sunday' removeFromGroceryList={mockRemoveFromGroceryList} removeFromMenu={mockRemoveFromMenu} menu={mockMenu}/>);
  });

  it('matches snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('calls removeFromMenu on button click', () => {
    wrapper.find('button').at(0).simulate('click')

    expect(mockRemoveFromMenu).toHaveBeenCalledWith('sunday', 'breakfast');
  });

  it('calls removeFromGroceryList on button click', () => {
    wrapper.find('button').at(0).simulate('click')

    expect(mockRemoveFromGroceryList).toHaveBeenCalledWith(['apples']);
  });
});