import React from 'react';
import { shallow } from 'enzyme';
import { observable } from 'mobx';
import toJson from 'enzyme-to-json';
import UserReposList from '../../../src/Components/User/UserReposList';

const store = observable({
  repos: [
    {
      id: 1,
      name: 'firstRepo',
      forks_count: 0,
      stargazers_count: 0,
      description: 'First repo description',
      html_url: 'https://github.com/aOko123/firstRepo',
    },
    {
      id: 2,
      name: 'secondRepo',
      forks_count: 0,
      stargazers_count: 0,
      description: 'Second repo description',
      html_url: 'https://github.com/aOko123/secondRepo',
    },
  ],
});

describe('testing UserReposList component', () => {
  let wrapper;
  let props;
  beforeEach(() => {
    props = {
      store,
    };

    wrapper = shallow(<UserReposList.wrappedComponent {...props} />);
  });

  test('renders without crashing', () => {
    expect(wrapper).toBeDefined();
  });
  test('matching snapshot', () => {
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
