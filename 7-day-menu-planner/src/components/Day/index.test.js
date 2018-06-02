import React from 'react';
import Day from './index.js';
import { shallow } from 'enzyme';

describe('Day', () => {
  let wrapper;
  let mockMenu;
  let mockFunction;

  beforeEach(() => {
    mockFunction = jest.fn();

    mockMenu = {
      sunday: {
        breakfast: {title: 'Recipe Name'},
        lunch: {},
        dinner: {}
      }
    };
    wrapper = shallow(<Day day='sunday' removeFromMenu={mockFunction} menu={mockMenu}/>);
  });

  it('matches snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('calls removeFromMenu on button click', () => {
    wrapper.find('button').at(0).simulate('click')

    expect(mockFunction).toHaveBeenCalledWith('sunday', 'breakfast');
  });
});