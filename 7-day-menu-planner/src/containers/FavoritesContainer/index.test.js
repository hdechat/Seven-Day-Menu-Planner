import { mapStateToProps } from './index.js';

describe('FAVORITES CONTAINER', () => {
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