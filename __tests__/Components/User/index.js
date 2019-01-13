import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import { User } from '../../../src/Components/User';

describe('testing User component', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(
      <User />,
    );
  });
  test('renders without crashing', () => {
    expect(wrapper).toBeDefined();
  });
  test('matching snapshot', () => {
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
