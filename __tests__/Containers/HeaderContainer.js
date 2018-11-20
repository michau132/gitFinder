import React from 'react';
import { shallow, mount } from 'enzyme';
import { HeaderContainer } from '../../src/Containers/HeaderContainer';
import Header from '../../src/Components/Header';

describe('testing HeaderContainer', () => {
  let props;
  beforeEach(() => {
    props = {
      onFormSubmit: jest.fn(),
      history: { push: jest.fn() },
    };
  });
  test('renders without crashing', () => {
    const wrapper = shallow(<HeaderContainer {...props} />);
    expect(wrapper).toBeDefined();
  });

  describe('checking methods', () => {
    let wrapper;

    beforeEach(() => {
      wrapper = mount(<HeaderContainer {...props} />);
    });

    test('should render Header Component', () => {
      expect(wrapper.children(Header).length).toEqual(1);
    });

    test('should update inputValue', () => {
      expect(wrapper.state().inputValue).toEqual('');
      const { updateInputValue } = wrapper.find(Header).props();
      updateInputValue({ target: { value: 'adam' } });
      expect(wrapper.state().inputValue).toEqual('adam');
    });

    test('should call onFormSubmit', () => {
      const { onFormSubmit } = wrapper.find(Header).props();
      onFormSubmit({ preventDefault: () => {} });
      expect(props.onFormSubmit).toHaveBeenCalled();
    });
  });
});
