import React from 'react';
import { shallow } from 'enzyme';
import FavoritesContainer, { mapStateToProps } from './index.js';

describe('FAVORITES CONTAINER', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<FavoritesContainer />);
  });

  it('matches snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should return the prop object', () => {
    const mockState = {
      recipes: {},
      menu: {},
      groceryList: [],
      favorites: [{title: 'recipe'}]
    };

    const expected = {
      favorites: [{title: 'recipe'}]
    };

    const mappedProps = mapStateToProps(mockState);

    expect(mappedProps).toEqual(expected);
  });
});