import React from 'react';
import RecipeCardsDisplay from './index.js';
import { shallow } from 'enzyme';

describe('Recipe Cards Display', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<RecipeCardsDisplay />)
  });
  it('matches snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });
});