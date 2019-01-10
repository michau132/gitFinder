import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import data from 'fake-data';
import { UserContainer } from '../../src/Containers/UserContainer';

describe('testing UserContainer', () => {
  let props;
  let wrapper;
  beforeEach(() => {
    props = {
      fetchData: jest.fn(),
      match: {
        params: {
          user: 'adam',
        },
      },
      user: { ...data.__getAll },
    };
    wrapper = shallow(<UserContainer {...props} />);
  });

  test('renders without crashing', () => {
    expect(wrapper).toBeDefined();
  });

  test('should match snapshot', () => {
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
