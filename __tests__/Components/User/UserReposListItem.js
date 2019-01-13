import React from 'react';
import { shallow } from 'enzyme';
import { observable } from 'mobx';
import toJson from 'enzyme-to-json';
import UserReposListItem from '../../../src/Components/User/UserReposListItem';

const store = observable({
  selectUserRepo: jest.fn(),
  hideSingleRepo: jest.fn(),
});

describe('testing UserReposListItem component', () => {
  let wrapper;
  let props;
  beforeEach(() => {
    props = {
      listItem: {
        id: 1,
        name: 'firstRepo',
        forks_count: 0,
        stargazers_count: 0,
        description: 'First repo description',
        html_url: 'https://github.com/aOko123/firstRepo',
      },
      store,
    };

    wrapper = shallow(<UserReposListItem.wrappedComponent {...props} />);
  });

  test('renders without crashing', () => {
    expect(wrapper).toBeDefined();
  });
  test('matching snapshot', () => {
    expect(toJson(wrapper)).toMatchSnapshot();
  });

  test('wrapper should be visible', () => {
    expect(wrapper.prop('in')).toBe(true);
  });

  test('wrapper should not have background color, it is not founded', () => {
    expect(wrapper.prop('isfounded')).toBeFalsy();
  });

  test('wrapper should not have been selected', () => {
    const listItem = wrapper.find('[data-test="listItem"]');
    expect(listItem.prop('selected')).toBeFalsy();
  });

  test('checkbox should not have been selected', () => {
    const checkbox = wrapper.find('[data-test="checkbox"]');
    expect(checkbox.prop('checked')).toBeFalsy();
  });

  test('calls action selectUserRepo', () => {
    const listItem = wrapper.find('[data-test="listItem"]');
    listItem.simulate('click');
    expect(props.store.selectUserRepo).toHaveBeenCalledWith(props.listItem.id);
  });

  test('Button should be defined and redirect to user repository', () => {
    const button = wrapper.find('[data-test="open"]');
    expect(button.prop('href')).toBe(props.listItem.html_url);
  });

  test('calls action hideSingleRepo', () => {
    const button = wrapper.find('[data-test="hide"]');
    button.simulate('click');
    expect(props.store.hideSingleRepo).toHaveBeenCalledWith(props.listItem.id);
  });
});
