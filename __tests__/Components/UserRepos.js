import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import UserRepos from '../../src/Components/UserRepos';

describe('testing UserRepos component', () => {
  let wrapper;
  let props;
  beforeEach(() => {
    props = {
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
      selectUserRepo: jest.fn(),
      hideSingleRepo: jest.fn(),
      openSingleRepo: jest.fn(),
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

    wrapper = shallow(<UserRepos {...props} />);
  });

  test('renders without crashing', () => {
    expect(wrapper).toBeDefined();
  });
  test('matching snapshot', () => {
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
