import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import UserView from '../../src/Components/UserView';

describe('testing UserView component', () => {
  let wrapper;
  let props;
  beforeEach(() => {
    props = {
      user: {
        userInfo: {
          name: 'Adam Oko',
          login: 'aOko123',
          email: 'aoko123@gmail.com',
          loctation: 'Raszyn',
          avatar_url: 'https://via.placeholder.com/150',
        },
        userRepos: [
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
      },
    };
    wrapper = shallow(
      <UserView {...props} />,
    );
  });
  test('renders without crashing', () => {
    expect(wrapper).toBeDefined();
  });
  test('matching snapshot', () => {
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});