import React from 'react';
import { shallow } from 'enzyme';
import { HeaderContainer } from '../../src/Containers/HeaderContainer';

describe('testing HeaderContainer', () => {
  let props;
  beforeEach(() => {
    props = {
      onFormSubmit: jest.fn(),
      history: { push: jest.fn() },
      render: jest.fn(),
    };
  });
  test('renders without crashing', () => {
    const wrapper = shallow(<HeaderContainer {...props} />);
    expect(wrapper).toBeDefined();
  });
});
