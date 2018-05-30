import { mapStateToProps } from './index.js';

describe('Menu Calendar', () => {
  it('should return the prop object', () => {
    const mockState = {
      menu: {
        sunday: {
          breakfast: {title: 'Recipe Name'}
        }
      },
      recipes: {
        results: []
      }
    };

    const expected = {
      menu: {
        sunday: {
          breakfast: {title: 'Recipe Name'}
        }
      }
    };

    const mappedProps = mapStateToProps(mockState);

    expect(mappedProps).toEqual(expected)
  });
});