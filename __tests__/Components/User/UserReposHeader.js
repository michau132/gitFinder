import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import UserReposHeader from '../../../src/Components/User/UserReposHeader';

describe('testing UserReposHeader', () => {
  let wrapper;
  let props;
  beforeEach(() => {
    props = {
      handleFilterRepos: jest.fn(),
      openSelectedRepos: jest.fn(),
      handleHideSelectedRepos: jest.fn(),
      handleShowAllRepos: jest.fn(),
      handleSelectAllRepos: jest.fn(),
      restStore: {
        isShowAllBtnDisabled: true,
        selectedReposAreEmpty: true,
        filterProjectsInput: 'project',
        allReposAreSelected: false,
      },
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
    wrapper.find('.checkbox').simulate('change');
    expect(props.handleSelectAllRepos).toHaveBeenCalled();
  });

  test('calls onChange event on filterProjectsInput', () => {
    const filterInput = wrapper.find('.input');
    expect(filterInput.prop('value')).toEqual(props.restStore.filterProjectsInput);
    filterInput.simulate('change', { target: { value: 'ddds' } });
    expect(props.handleFilterRepos).toHaveBeenCalledWith({ target: { value: 'ddds' } });
  });

  describe('testing buttons', () => {
    test('calls event on openSelectedRepos', () => {
      const openButton = wrapper.find('.open');
      openButton.simulate('click');
      expect(props.openSelectedRepos).toHaveBeenCalled();
    });

    test('calls event on hideSelectedRepos', () => {
      const hideButton = wrapper.find('.hide');
      hideButton.simulate('click');
      expect(props.handleHideSelectedRepos).toHaveBeenCalled();
    });

    test('calls event on showAllRepos', () => {
      const showAllButton = wrapper.find('.showAll');
      showAllButton.simulate('click');
      expect(props.handleShowAllRepos).toHaveBeenCalled();
    });
  });
});
