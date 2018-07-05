import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import IdeaContainer from './IdeaContainer';
import renderer from 'react-test-renderer';

import { shallow, mount } from 'enzyme';

//component is rendered
//functions execute
//component is rendered with correct props
//component calls a function
//defaults

//1.Setup
//2.Execution
//3.Assertion
//4.optional in JS - Tear Down

describe('App', () => {
  it('renders', () => {
    const app = shallow(<App />);

    expect(app).toHaveLength(1);
  });

  it('renders an IdeaContainer with the correct props', () => {
    const app = shallow(<App />);

    expect(app.find(IdeaContainer).prop('ideas')).toEqual([]);
  });

  it('matches the snapshot', () => {
      //creates snapshot which can be found int node_module file.  append with toJSON() to console.log more clearly
    const app = renderer.create(<App />);

    expect(app).toMatchSnapshot();
  });

  describe('removeIdea', () => {
    it('changes state', () => {
      const app = shallow(<App />);
      const id = 3;

      //set state on wrapper to set up state to create idea with the id of '3' in order to set up test for method
      // app.setState([])

      app.instance().removeIdea(id);

      expect()


    });
  });
});
