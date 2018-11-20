import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import data from 'fake-data';
import { UserReposContainer } from '../../src/Containers/UserReposContainer';

describe('testing UserReposContainer', () => {
  let wrapper;
  let props;
  beforeEach(() => {
    props = {
      ...data.__getAll,
      selectUserRepo: jest.fn(),
      hideSingleRepo: jest.fn(),
      openSingleRepo: jest.fn(),
    };
    wrapper = shallow(<UserReposContainer {...props} />);
  });
  test('renders without crashing', () => {
    expect(wrapper).toBeDefined();
  });

  test('should match snapshot', () => {
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
