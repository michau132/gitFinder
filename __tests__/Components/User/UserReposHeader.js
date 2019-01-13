import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import { observable } from 'mobx';
import UserReposHeader from '../../../src/Components/User/UserReposHeader';

const store = observable({
  filterRepos: jest.fn(),
  hideSelectedRepos: jest.fn(),
  showAllRepos: jest.fn(),
  selectAllRepos: jest.fn(),
  isShowAllBtnDisabled: false,
  selectedReposAreEmpty: true,
  filterProjectsInput: '',
  allReposAreSelected: false,
  foundedCount: 0,
  repos: [],
});

describe('testing UserReposHeader', () => {
  let wrapper;
  let props;
  beforeEach(() => {
    props = {
      store,
    };
    wrapper = shallow(<UserReposHeader.wrappedComponent {...props} />);
  });

  test('renders without crashing', () => {
    expect(wrapper).toBeDefined();
  });

  test('matching snapshot', () => {
    expect(toJson(wrapper)).toMatchSnapshot();
  });

  test('calls onChange event on select all checkbox', () => {
    const checkbox = wrapper.find('[data-test="checkbox"]');
    checkbox.simulate('change', { target: { checked: true } });
    expect(props.store.selectAllRepos).toHaveBeenCalled();
  });

  test('calls onChange event on filterProjectsInput', () => {
    const filterInput = wrapper.find('[data-test="input"]');
    expect(filterInput.prop('value')).toEqual(props.store.filterProjectsInput);
    filterInput.simulate('change', { target: { value: 'ddds' } });
    expect(props.store.filterRepos).toHaveBeenCalledWith('ddds');
  });

  describe('testing buttons', () => {
    test('calls event on hideSelectedRepos', () => {
      const hideButton = wrapper.find('[data-test="hide"]');
      hideButton.simulate('click');
      expect(props.store.hideSelectedRepos).toHaveBeenCalled();
    });

    test('calls event on showAllRepos', () => {
      const showAllButton = wrapper.find('[data-test="showAll"]');
      showAllButton.simulate('click');
      expect(props.store.showAllRepos).toHaveBeenCalled();
    });
  });
});
