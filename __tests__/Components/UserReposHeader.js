import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import UserReposHeader from '../../src/Components/UserRepos/UserReposHeader';

describe('testing UserReposHeader', () => {
  let wrapper;
  let props;
  beforeEach(() => {
    props = {
      setReposOnKeyUp: jest.fn(),
      openSelectedRepos: jest.fn(),
      hideSelectedRepos: jest.fn(),
      showAllRepos: jest.fn(),
      selectAllRepos: jest.fn(),
      allReposAreShown: true,
      selectedReposAreEmpty: true,
      filterProjectsInput: 'project',
      allReposAreSelected: false,
    };
    wrapper = shallow(<UserReposHeader {...props} />);
  });

  test('renders without crashing', () => {
    expect(wrapper).toBeDefined();
  });

  test('matching snapshot', () => {
    expect(toJson(wrapper)).toMatchSnapshot();
  });

  test('calls onChange event on select all checkbox', () => {
    wrapper.find('input[type="checkbox"]').simulate('change');
    expect(props.selectAllRepos).toHaveBeenCalled();
  });

  test('calls onChange event on filterProjectsInput', () => {
    const filterInput = wrapper.find('input[type="text"]');
    expect(filterInput.prop('value')).toEqual(props.filterProjectsInput);
    filterInput.simulate('change', { target: { value: 'ddds' } });
    expect(props.setReposOnKeyUp).toHaveBeenCalledWith('ddds');
  });

  describe('testing buttons', () => {
    let Buttons;
    beforeEach(() => {
      Buttons = wrapper.find('Button');
    });
    test('calls event on openSelectedRepos', () => {
      const firstButton = Buttons.at(0);
      expect(firstButton.prop('text')).toEqual('open');
      firstButton.simulate('click');
      expect(props.openSelectedRepos).toHaveBeenCalled();
    });

    test('calls event on hideSelectedRepos', () => {
      const firstButton = Buttons.at(1);
      expect(firstButton.prop('text')).toEqual('hide');
      firstButton.simulate('click');
      expect(props.hideSelectedRepos).toHaveBeenCalled();
    });

    test('calls event on showAllRepos', () => {
      const firstButton = Buttons.at(2);
      expect(firstButton.prop('text')).toEqual('show all');
      firstButton.simulate('click');
      expect(props.showAllRepos).toHaveBeenCalled();
    });
  });
});
