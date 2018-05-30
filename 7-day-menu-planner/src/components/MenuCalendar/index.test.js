import MenuCalendar from './index.js';
import { shallow } from 'enzyme';

describe('Add To Menu', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<MenuCalendar />);
  });

  it('matches snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });
});