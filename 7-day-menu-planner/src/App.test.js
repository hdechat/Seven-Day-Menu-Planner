import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { shallow } from 'enzyme'

describe('App', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<App />)
  });
it('matches snapshot', () => {
  expect(wrapper).toMatchSnapshot();
});
});
