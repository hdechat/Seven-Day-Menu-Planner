import React from 'react';
import ReactDOM from 'react-dom';
import { App } from './App';
import { shallow, mount } from 'enzyme';
import { chooseCategory } from './actions';
import { mapDispatchToProps } from './App.js';

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
});






