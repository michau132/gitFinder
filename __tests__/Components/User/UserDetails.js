import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import UserDetails from '../../../src/Components/User/UserDetails';

describe('testing UserDetails component', () => {
  let wrapper;
  let props;
  beforeEach(() => {
    props = {
      store: {
        informations: {
          name: 'Adam Oko',
          login: 'aOko123',
          email: 'aoko123@gmail.com',
          loctation: 'Raszyn',
        },
      },
    };
    wrapper = shallow(
      <UserDetails.wrappedComponent {...props} />,
    );
  });
  test('renders without crashing', () => {
    expect(wrapper).toBeDefined();
  });
  test('matching snapshot', () => {
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
