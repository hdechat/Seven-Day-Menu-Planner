import React from 'react';
import MenuCalendar from './index.js';
import { shallow } from 'enzyme';

describe('Add To Menu', () => {
  let wrapper;
  let mockMenu;

  beforeEach(() => {
    mockMenu = {
      menu: {
        breakfast: {title: 'Recipe Name'}
      }
    }

    wrapper = shallow(<MenuCalendar menu={mockMenu} />);
  });

  it('matches snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });
});