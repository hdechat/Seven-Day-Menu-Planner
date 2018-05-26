import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { shallow, mount } from 'enzyme'

describe('App', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<App />);
  });

  it('matches snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should call handleClick when user selecets diet plan', () => {
    wrapper = mount(<App />)
    const spy = spyOn(wrapper.instance(), 'handleClick');
    
    wrapper.instance().forceUpdate();
    wrapper.find('select').simulate('change', {target: {value: 'paleo'}})

    expect(spy).toHaveBeenCalled();
  });

  it('should upate dietPlan in state when diet plan is selected', () => {
    const mockEvent = { target: {value: 'paleo'}};

    wrapper.instance().handleClick( mockEvent);

    expect(wrapper.state('dietPlan')).toEqual('paleo')
    
  });
});