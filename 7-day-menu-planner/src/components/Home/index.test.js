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
       recipesIsLoading={false} r
       ecipeCards={[]} 
       chooseCategory={mockFunction} />);
  });

  it('matches snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should call chooseCategory with the correct params when category selected', () => {
    wrapper.find('select').simulate('change', {target: {value: 'paleo'}});

    expect(mockFunction).toHaveBeenCalledWith('paleo');
  });

  it('should render message if recipesIsLoading is true', () => {
    wrapper.setProps({recipesIsLoading: true});

    expect(wrapper.find('.loading-message').length).toEqual(1);
  });

  it('should render error if fetch has errored', () => {
    wrapper.setProps({recipesHasErrored: 'Something went wrong.'});
    expect(wrapper.find('.error-message').length).toEqual(1);
  });
});
