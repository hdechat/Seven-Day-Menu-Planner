import Day from './index.js';
import { shallow } from 'enzyme';

describe('Day', () => {
  let wrapper;
  let mockMenu;

  beforeEach(() => {
    mockMenu = {
      breakfast: {title: 'Recipe Name'}
    }
    wrapper = shallow(<Day menu={mockMenu}/>)
  });

  it('matches snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });
});