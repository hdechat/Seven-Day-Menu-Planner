import React from 'react';
import RecipeCardsDisplay from './index.js';
import { shallow } from 'enzyme';

describe('Recipe Cards Display', () => {
  let wrapper;
  let mockRecipeCards;

  beforeEach(() => {
    mockRecipeCards = [{title: 'recipe 1'}, {title: 'recipe 2'}]

    wrapper = shallow(<RecipeCardsDisplay recipeCards = {mockRecipeCards}/>)
  });
  it('matches snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });
});