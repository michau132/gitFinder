import React from 'react';
import { mount } from 'enzyme';
import toJson from 'enzyme-to-json';
import { UserContainer } from '../../src/Containers/UserContainer';
import store from '../../src/store';

describe('testing UserContainer', () => {
  let props;
  let wrapper;
  beforeEach(() => {
    props = {
      match: {
        params: {
          user: 'adam',
        },
      },
      render: jest.fn(),
    };
    wrapper = mount(<UserContainer {...props} />);
  });

  test('renders without crashing', () => {
    expect(wrapper).toBeDefined();
  });

  test('should match snapshot', () => {
    expect(toJson(wrapper)).toMatchSnapshot();
  });

  test('getUserInfoAndRepos is called in ComponentDidMount', () => {
    const spyOn = jest.spyOn(store, 'getUserInfoAndRepos');
    wrapper.instance().componentDidMount();
    expect(spyOn).toHaveBeenCalledWith('adam');
  });

  test('getUserInfoAndRepos is called when props changed', () => {
    wrapper.setProps({
      match: {
        params: {
          user: 'otherOne',
        },
      },
    });
    const spyOn = jest.spyOn(store, 'getUserInfoAndRepos');
    expect(spyOn).toHaveBeenCalledWith('otherOne');
  });

  test('filterRepos from store should be called', () => {
    const spyOn = jest.spyOn(store, 'filterRepos');
    wrapper.instance().handleFilterRepos({ target: { value: 'repo' } });
    expect(spyOn).toHaveBeenCalled();
  });

  test('selectUserRepo from store should be called', () => {
    const spyOn = jest.spyOn(store, 'selectUserRepo');
    wrapper.instance().handleSelectUserRepo(2);
    expect(spyOn).toHaveBeenCalledWith(2);
  });

  test('showAllRepos from store should be called', () => {
    const spyOn = jest.spyOn(store, 'showAllRepos');
    wrapper.instance().handleShowAllRepos();
    expect(spyOn).toHaveBeenCalled();
  });

  test('hideSelectedRepos from store should be called', () => {
    const spyOn = jest.spyOn(store, 'hideSelectedRepos');
    wrapper.instance().handleHideSelectedRepos();
    expect(spyOn).toHaveBeenCalled();
  });

  test('hideSingleRepo from store should be called', () => {
    const spyOn = jest.spyOn(store, 'hideSingleRepo');
    wrapper.instance().handleHideSingleRepo(2);
    expect(spyOn).toHaveBeenCalledWith(2);
  });

  test('selectAllRepos from store should be called', () => {
    const spyOn = jest.spyOn(store, 'selectAllRepos');
    wrapper.instance().handleSelectAllRepos();
    expect(spyOn).toHaveBeenCalled();
  });

  test('openSelectedRepos from store should be called', () => {
    wrapper.instance().openSelectedRepos();
    expect(props.render).toHaveBeenCalled();
  });
});
