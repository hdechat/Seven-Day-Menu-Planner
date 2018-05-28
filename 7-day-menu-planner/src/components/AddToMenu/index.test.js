import React from 'react';
import { shallow, mount } from 'enzyme';
import AddToMenu from './index.js'

describe('Add To Menu', () => {
  let wrapper;
  let mockRecipe;

  beforeEach(() => {
    mockRecipe = {
      "image": "https://www.edamam.com/web-img/e50/e50584043c015a91a26a7a37f093d476",
      "ingredients": ["1½ pounds fresh red jalapeño peppers, stemmed, seeded, and roughly chopped", "8 garlic cloves, peeled and smashed", "⅓ cup apple cider vinegar", "3 tablespoons tomato paste", "3 tablespoons honey", "2 tablespoons Paleo-friendly fish sauce (Red Boat!)", "1½ teaspoons kosher salt"],
      "title": "Paleo Sriracha recipes",
      "url": "http://nomnompaleo.com/post/36060636540/paleo-sriracha"
    };

    wrapper = shallow(<AddToMenu recipe={mockRecipe}/>)
  });

  it('matches snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

  describe('Select Weekday', () => {
    let mockEvent;

    beforeEach(() => {
      mockEvent = { target: {
        name: 'weekday',
        value: 'Monday'
      }};
    });

    it('should call handleClick when user selects weekday', () => {
      wrapper = mount(<AddToMenu recipe={mockRecipe} />);

      const spy = spyOn(wrapper.instance(), 'handleClick');

      wrapper.instance().forceUpdate();
      wrapper.find('#weekday').simulate('change', mockEvent);

      expect(spy).toHaveBeenCalled();
    });

    it('should update weekday in state when weekday is selected', () => {
      wrapper.instance().handleClick(mockEvent);

      expect(wrapper.state('weekday')).toEqual('Monday');
    });

  describe('Select MealTime', () => {
    let mockEvent;

    beforeEach(() => {
      mockEvent = { target: {
        name: 'mealTime',
        value: 'Breakfast'
      }};
    });

    it('should call handleClick when user selects meal time', () => {
      wrapper = mount(<AddToMenu recipe={mockRecipe} />);

      const spy = spyOn(wrapper.instance(), 'handleClick');

      wrapper.instance().forceUpdate();
      wrapper.find('#meal-time').simulate('change', mockEvent);

      expect(spy).toHaveBeenCalled();
    });

    it('should update weekday in state when weekday is selected', () => {
      wrapper.instance().handleClick(mockEvent);

      expect(wrapper.state('mealTime')).toEqual('Breakfast');
    });
  });

  it('should call AddToMenu on submit', () => {
    wrapper = mount(<AddToMenu recipe={mockRecipe} />);

    const spy = spyOn(wrapper.instance(), 'AddToMenu');

    wrapper.instance().forceUpdate();
    wrapper.find('button').simulate('click', {preventDefault: jest.fn()});

    expect(spy).toHaveBeenCalled();
  });
});



