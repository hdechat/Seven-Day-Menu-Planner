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
    wrapper.find('.star').simulate('click');

    expect(mockFunction).toHaveBeenCalledWith(mockRecipe);
  });

  //these two tests are a work around in response to jest's 'Compared values have no visual difference'
  it('should render an empty star if it is not a favorite', () => {
    const expected = JSON.parse(JSON.stringify(<img alt="star" className="star" onClick={() => toggleFavorites(recipe)} src="emptyStar.png" />));

    const actual = JSON.parse(JSON.stringify(wrapper.props().children[0]));

    expect(actual).toEqual(expected);
  });


  it('should render a yellow star if it is a favorite', () => {
    wrapper.setProps({favorites: [mockRecipe]})

    const expected = JSON.parse(JSON.stringify(<img alt="star" className="star" onClick={() => toggleFavorites(recipe)} src="yellowStar.png" />));

    const actual = JSON.parse(JSON.stringify(wrapper.props().children[0]));

    expect(actual).toEqual(expected);
  });
});
