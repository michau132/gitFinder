import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import Loading from '../../src/hoc/Loading';

const component = () => <h1>Hi there</h1>;
const ConditionalHOC = Loading(component);
const props = {
  restStore: {
    isLoading: true,
  },
};

describe('testing Loading HOC', () => {
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
