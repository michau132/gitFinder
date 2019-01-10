import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import EmptyUser from '../../src/Components/EmptyUser';

describe('testing EmptyUser Component', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<EmptyUser />);
  });

  test('renders without crashing', () => {
    expect(wrapper).toBeDefined();
  });

  test('should match snapshot', () => {
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
