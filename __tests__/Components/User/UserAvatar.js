import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import UserAvatar from '../../../src/Components/User/UserAvatar';

describe('testing UserAvatar component', () => {
  test('matching snapshot', () => {
    const wrapper = shallow(<UserAvatar avatarUrl="https://via.placeholder.com/150" />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
