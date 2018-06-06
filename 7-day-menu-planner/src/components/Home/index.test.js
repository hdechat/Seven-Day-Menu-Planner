import React from 'react';
import Home from './index.js';
import { shallow } from 'enzyme';

describe('Home', () => {
  let wrapper;
  let mockFunction;

  beforeEach(() => {
    mockFunction = jest.fn();

    wrapper = shallow(<Home 
      recipesHasErrored={''}
       recipesIsLoading={false} 
       recipeCards={[]} 
       chooseCategory={mockFunction} />);
  });

  it('matches snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should render loading gif if recipesIsLoading is true', () => {
    wrapper.setProps({recipesIsLoading: true});

    expect(wrapper.find('.loading-gif').length).toEqual(1);
  });

  it('should render error if fetch has errored', () => {
    wrapper.setProps({recipesHasErrored: 'Something went wrong.'});
    expect(wrapper.find('.error-message').length).toEqual(1);
  });

  it('should display welcome message if no recipe cards are rendered', () => {
    expect(wrapper.find('.welcome-message').length).toEqual(1);
    wrapper.setProps({ recipeCards: [{title: 'recipe'}] });

    expect(wrapper.find('.welcome-message').length).toEqual(0);
  });

  it('should call chooseCategory with the correct params when category selected', () => {
    wrapper.find('.english-select').simulate('change', {target: {value: 'paleo'}});

    expect(mockFunction).toHaveBeenCalledWith('api', 'paleo');
  });

  it('should call chooseCategory with the correct params when the filter option is selected', () => {
    wrapper.setState({ category: 'paleo'})

    wrapper.find('#filters').simulate('change', {target: {value: '&health=peanut-free'}});

    expect(mockFunction).toHaveBeenCalledWith('api', 'paleo', '&health=peanut-free');
  });

  it('should set state with onChange', () => {
    wrapper.find('#english-search').simulate('change', {target: {value: 'high-protein'}});

    expect(wrapper.state('category')).toEqual('high-protein');
  });

  it('should call chooseCategory when user enters search term', () => {
    wrapper.setState({ category: 'high-protein' })
    wrapper.find('#english-search').simulate('keypress', {key: 'Enter'});

    expect(mockFunction).toHaveBeenCalledWith('api', 'high-protein');
  });

  describe('BETA SPANISH', () => {
    it('should call chooseCategory with the correct params when category selected', () => {
    wrapper.find('.spanish-select').simulate('change', {target: {value: 'paleo'}});

    expect(mockFunction).toHaveBeenCalledWith('test-es', 'paleo');
    });

    it('should call chooseCategory with the correct params when the filter option is selected', () => {
    wrapper.setState({ spanishSearch: 'paleo'})

    wrapper.find('#filters-sp').simulate('change', {target: {value: '&health=peanut-free'}});

    expect(mockFunction).toHaveBeenCalledWith('test-es', 'paleo', '&health=peanut-free');
    });

    it('should set state with onChange', () => {
    wrapper.find('#spanish-search').simulate('change', {target: {value: 'high-protein'}});

    expect(wrapper.state('spanishSearch')).toEqual('high-protein');
    });

    it('should call chooseCategory when user enters search term', () => {
      wrapper.setState({ spanishSearch: 'high-protein' })
      wrapper.find('#spanish-search').simulate('keypress', {key: 'Enter'});

      expect(mockFunction).toHaveBeenCalledWith('test-es', 'high-protein');
    });
  });
});
