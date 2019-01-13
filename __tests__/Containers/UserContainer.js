import React from 'react';
import { shallow } from 'enzyme';
import { observable } from 'mobx';
import UserContainer from '../../src/Containers/UserContainer';

const store = observable({
  error: false,
  isLoading: false,
  getUserInfoAndRepos: jest.fn(),
});

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
      store,
    };
    wrapper = shallow(<UserContainer.wrappedComponent {...props} />);
  });


  test('renders without crashing', () => {
    expect(wrapper).toBeDefined();
  });

  test('getUserInfoAndRepos is called in ComponentDidMount', () => {
    wrapper.instance().componentDidMount();
    expect(props.store.getUserInfoAndRepos).toHaveBeenCalledWith('adam');
  });

  test('getUserInfoAndRepos is called when props changed', () => {
    wrapper.setProps({
      match: {
        params: {
          user: 'otherOne',
        },
      },
    });
    expect(props.store.getUserInfoAndRepos).toHaveBeenCalledWith('otherOne');
  });
});
