import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import Header from '../../src/Components/Header';


describe('testing Header component', () => {
  let props;
  let wrapper;

  beforeEach(() => {
    props = {
      onFormSubmit: jest.fn(() => 'onFormSubmit'),
      inputValue: 'adam',
      updateInputValue: jest.fn(() => 'updateInputValue'),
      errorInput: null,
    };
    wrapper = shallow(<Header {...props} />);
  });
  test('renders without crashing', () => {
    expect(wrapper).toBeDefined();
  });

  test('matching snapshot', () => {
    expect(toJson(wrapper)).toMatchSnapshot();
  });

  test('submiting form', () => {
    wrapper.simulate('submit');
    expect(props.onFormSubmit).toHaveBeenCalled();
  });
  test('checking form input', () => {
    const input = wrapper.find('input');
    expect(input.prop('value')).toEqual('adam');
    input.simulate('change');
    expect(props.updateInputValue).toHaveBeenCalled();
  });

  test('error is set to null', () => {
    expect(wrapper.find('.error')).toHaveLength(0);
  });
});
