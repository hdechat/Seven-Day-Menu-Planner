import React from 'react';
import ReactDOM from 'react-dom';
import { App } from './App';
import { shallow, mount } from 'enzyme';
import { chooseCategory } from './actions';
import { mapStateToProps, mapDispatchToProps } from './App.js';
import * as sagas from './sagas';

describe('App', () => {
  let wrapper;
  let mockFunction;

  beforeEach(() => {
    mockFunction = jest.fn();
    wrapper = shallow(<App chooseCategory={mockFunction} />);
  });

  it('matches snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should call handleClick when user selects diet plan', () => {
    wrapper = mount(<App />)
    const spy = spyOn(wrapper.instance(), 'handleClick');
    
    wrapper.instance().forceUpdate();
    wrapper.find('select').simulate('change', {target: {value: 'paleo'}})

    expect(spy).toHaveBeenCalled();
  });

  it('should upate dietPlan in state when diet plan is selected', () => {
    const mockEvent = { target: {value: 'paleo'} };

    wrapper.instance().handleClick(mockEvent);

    expect(wrapper.state('dietPlan')).toEqual('paleo')
  });

  it('should call chooseCategory with the selected dietPlan when handleClick is fired', async () => {
    const mockEvent = { target: {value: 'paleo'} };

    await wrapper.instance().handleClick(mockEvent);

    expect(mockFunction).toHaveBeenCalledWith('paleo');
  });
  
  it('should call dispatch with a chooseCategory action', () => {
    const dispatch = jest.fn();
    const actionToDispatch = chooseCategory('paleo');
    const mappedProps = mapDispatchToProps(dispatch);

    mappedProps.chooseCategory('paleo');

    expect(dispatch).toHaveBeenCalledWith(actionToDispatch);
  });

  it('should return the recipesIsLoading prop object', () => {
    const mockState = {
      recipes: {
        results: [{title: 'Recipe Name'}],
        recipesIsLoading: false,
        recipesHasErrored: false
      }
    };

    const expected = { 
      recipesIsLoading: false, 
      recipeCards: [{title: 'Recipe Name'}] 
    }

    const mappedProps = mapStateToProps(mockState)

    expect(mappedProps).toEqual(expected);
  });

  it('should render message if recipesIsLoading is true', () => {
    expect(wrapper.find('.loading-message').length).toEqual(0);    

    wrapper.setProps({recipesIsLoading: true});

    expect(wrapper.find('.loading-message').length).toEqual(1);
  });
});
