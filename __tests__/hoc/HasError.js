import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import HasError from '../../src/hoc/HasError';

const component = () => <h1>Hi there</h1>;
const ConditionalHOC = HasError(component);
const props = {
  restStore: { error: true },
};

describe('testing HasError HOC', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<ConditionalHOC {...props} />);
  });
  test('should render component when loading is set to true', () => {
    expect(wrapper).toBeDefined();
  });

  test('should match snapshot', () => {
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
