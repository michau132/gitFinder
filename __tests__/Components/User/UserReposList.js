import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import UserReposList from '../../../src/Components/User/UserReposList';

describe('testing UserReposList component', () => {
  let wrapper;
  let props;
  beforeEach(() => {
    props = {
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
      selectUserRepo: jest.fn(),
      hideSingleRepo: jest.fn(),
      openSingleRepo: jest.fn(),
    };

    wrapper = shallow(<UserReposList {...props} />);
  });

  test('renders without crashing', () => {
    expect(wrapper).toBeDefined();
  });
  test('matching snapshot', () => {
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
