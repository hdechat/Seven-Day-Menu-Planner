import React from 'react';
import { shallow } from 'enzyme';
import RecipeCard from './index.js';

describe('Recipe Card', () => {
  let wrapper;
  let mockRecipe;
  let mockFunction;
  let mockFavorites;

  beforeEach(() => {
    mockRecipe = {
      "image": "https://www.edamam.com/web-img/e50/e50584043",
      "ingredients": [
        "1½ pounds fresh red jalapeño peppers, stemmed, seeded, and roughly chopped",
         "8 garlic cloves, peeled and smashed", 
         "⅓ cup apple cider vinegar", 
         "3 tablespoons tomato paste", 
         "3 tablespoons honey", 
         "2 tablespoons Paleo-friendly fish sauce (Red Boat!)", 
         "1½ teaspoons kosher salt"
       ],
      "title": "Paleo Sriracha recipes",
      "url": "http://nomnompaleo.com/post/36060636540/paleo-sriracha"
    };

    mockFunction = jest.fn();
    mockFavorites = [{title: 'Recipe1'}]

    wrapper = shallow(<RecipeCard 
      recipe={mockRecipe} 
      displayAddToMenu={true}
      toggleFavorites={mockFunction}
      favorites={mockFavorites}/>);
  });

  it('matches snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should call toggleFavorites when star icon is clicked', () => {
    wrapper.find('.empty-star').simulate('click');

    expect(mockFunction).toHaveBeenCalledWith(mockRecipe);
  });

  it('should render an empty star if it is not a favorite', () => {

    expect(wrapper.find('.empty-star').length).toEqual(1)
  });


  it('should render a yellow star if it is not a favorite', () => {
    wrapper.setProps({favorites: [mockRecipe]})

    expect(wrapper.find('.yellow-star').length).toEqual(1)
  });
});
