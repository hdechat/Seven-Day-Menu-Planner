import React from 'react';
import Favorites from './index.js';
import { shallow } from 'enzyme';

describe('FAVORITES', () => {
  let wrapper;
  let mockFavorites;

  beforeEach(() => {
    mockFavorites = [{title: 'recipe'}, {title: 'recipe'}];

    wrapper = shallow(<Favorites favorites={mockFavorites} />);
  });

  it('matches snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });
});