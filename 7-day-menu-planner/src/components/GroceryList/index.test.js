import React from 'react';
import { shallow } from 'enzyme';
import GroceryList from './index.js';

describe('GroceryList', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<GroceryList />);
  });

  it('matches snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });
});