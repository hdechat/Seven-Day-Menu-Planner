import React from 'react';
import { shallow, render } from 'enzyme';
import RecipeCard from './index.js';

describe('Recipe Card', () => {
  let wrapper;
  let mockRecipe;

  beforeEach(() => {
    mockRecipe = {
      "image": "https://www.edamam.com/web-img/e50/e50584043c015a91a26a7a37f093d476",
      "ingredients": ["1½ pounds fresh red jalapeño peppers, stemmed, seeded, and roughly chopped", "8 garlic cloves, peeled and smashed", "⅓ cup apple cider vinegar", "3 tablespoons tomato paste", "3 tablespoons honey", "2 tablespoons Paleo-friendly fish sauce (Red Boat!)", "1½ teaspoons kosher salt"],
      "title": "Paleo Sriracha recipes",
      "url": "http://nomnompaleo.com/post/36060636540/paleo-sriracha"
    }
    wrapper = shallow(<RecipeCard recipe={mockRecipe} displayAddToMenu={true}/>);
  });

  it('matches snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });
});