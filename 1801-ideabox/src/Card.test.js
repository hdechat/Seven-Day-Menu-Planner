import React from 'react';
import ReactDOM from 'react-dom';
import { Card } from './Card';

import { shallow, mount } from 'enzyme';

describe('Card', () => {
  it('calls removeIdea with the correct id', () => {
         //mock function
    const removeIdeaMock = jest.fn();
    const card = shallow(<Card title={'title'} body={'body'} id={2} removeIdea={removeIdeaMock}/>);

    //mock UI
    const button = card.find('button');
    button.simulate('click');

    expect(removeIdeaMock).toHaveBeenCalledWith(2);

  });
});