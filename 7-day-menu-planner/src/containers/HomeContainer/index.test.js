import React from 'react';
import ReactDOM from 'react-dom';
import { shallow, mount } from 'enzyme';
import HomeContainer from './index.js';
import { mapStateToProps, mapDispatchToProps } from './index.js';
import { chooseCategory } from '../../actions';

describe('HomeContainer', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<HomeContainer />);
  });

  it('matches snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });
  
  it('should call dispatch with a chooseCategory action', () => {
    const dispatch = jest.fn();
    const actionToDispatch = chooseCategory('paleo');
    const mappedProps = mapDispatchToProps(dispatch);

    mappedProps.chooseCategory('paleo');

    expect(dispatch).toHaveBeenCalledWith(actionToDispatch);
  });

  it('should return the prop object', () => {
    const mockState = {
      recipes: {
        results: [{title: 'Recipe Name'}],
        recipesIsLoading: false
      }
    };

    const expected = { 
      recipeCards: [{title: 'Recipe Name'}],
      recipesIsLoading: false, 
      recipesHasErrored: undefined
    }

    const mappedProps = mapStateToProps(mockState)

    expect(mappedProps).toEqual(expected);
  });
});
