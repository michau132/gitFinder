import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import Button from '../../src/Components/Button';

describe('testing Button Component', () => {
  let props;
  let wrapper;
  beforeEach(() => {
    props = {
      onClick: jest.fn(),
      type: 'button',
      className: 'dangerButton',
      disabled: false,
      text: 'open',
    };
    wrapper = shallow(<Button {...props} />);
  });
  test('renders without crashing', () => {
    expect(wrapper).toBeDefined();
  });

  test('matching snapshot', () => {
    expect(toJson(wrapper)).toMatchSnapshot();
  });

  test('calls onClick function when button is not disabled', () => {
    wrapper.simulate('click');
    expect(props.onClick).toHaveBeenCalled();
  });

  test('checking type prop', () => {
    expect(wrapper.prop('type')).toBe('button');
  });

  test('checking className prop', () => {
    expect(wrapper.prop('className')).toBe('dangerButton');
  });

  test('checking disabled prop', () => {
    expect(wrapper.prop('disabled')).toBeFalsy();
  });

  test('checking disabled prop', () => {
    wrapper.setProps({ disabled: true });
    expect(wrapper.prop('disabled')).toBeTruthy();
    expect(props.onClick).toHaveBeenCalledTimes(0);
  });
});
