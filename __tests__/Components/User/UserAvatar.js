import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import UserAvatar from '../../../src/Components/User/UserAvatar';

const props = {
  store: {
    informations: {
      avatar_url: 'https://via.placeholder.com/150',
    },
  },
};

describe('testing UserAvatar component', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<UserAvatar.wrappedComponent {...props} />);
  });
  test('renders without crashing', () => {
    expect(wrapper).toBeDefined();
  });
  test('matching snapshot', () => {
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
