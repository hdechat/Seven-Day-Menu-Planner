import React from 'react';
import { shallow } from 'enzyme';
import RecipeCard from './index.js';

describe('Recipe Card', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<RecipeCard />);
  });

  it('matches snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });
});