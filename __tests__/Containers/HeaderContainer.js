import React from 'react';
import { mount } from 'enzyme';
import { HeaderContainer } from '../../src/Containers/HeaderContainer';

describe('testing HeaderContainer', () => {
  let props;
  let wrapper;
  beforeEach(() => {
    props = {
      history: { push: jest.fn() },
      render: jest.fn(),
      location: {
        pathname: '/adam',
      },
    };
    wrapper = mount(<HeaderContainer {...props} />);
  });
  test('renders without crashing', () => {
    expect(wrapper).toBeDefined();
  });

  test('state should be defined', () => {
    expect(wrapper.state().inputValue).toBe('adam');
    expect(wrapper.state().pathname).toBe('/adam');
    expect(wrapper.state().error).toBeFalsy();
  });

  test('should update inputValue', () => {
    const { updateInputValue } = wrapper.instance();
    updateInputValue({ target: { value: 'another' } });
    expect(wrapper.state().inputValue).toBe('another');
    expect(wrapper.state().error).toBeFalsy();
    expect(props.render).toHaveBeenCalled();
  });

  test('should call onFormSubmit', () => {
    const { onFormSubmit } = wrapper.instance();
    onFormSubmit({ preventDefault: () => {} });
    expect(props.render).toHaveBeenCalled();
  });

  test('component will rerender when props change', () => {
    wrapper.setProps({ location: { pathname: '/user' } });
    expect(props.render).toHaveBeenCalled();
    expect(wrapper.state().inputValue).toBe('user');
    expect(wrapper.state().pathname).toBe('/user');
    expect(wrapper.state().error).toBeFalsy();
  });
});
