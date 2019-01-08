const __userRepos = [
  {
    id: 1,
    name: 'firstRepo',
    forks_count: 0,
    stargazers_count: 0,
    description: 'First repo description',
    html_url: 'https://github.com/aOko123/firstRepo',
    isChecked: false,
    isHidden: false,
    isFounded: false,
  },
  {
    id: 2,
    name: 'secondRepo',
    forks_count: 0,
    stargazers_count: 0,
    description: 'Second repo description',
    html_url: 'https://github.com/aOko123/secondRepo',
    isChecked: false,
    isHidden: false,
    isFounded: false,
  },
];

const __userInfo = {
  name: 'Adam Oko',
  login: 'aOko123',
  email: 'aoko123@gmail.com',
  loctation: 'Raszyn',
  avatar_url: 'https://via.placeholder.com/150',
};
const data = jest.fn();
data.__getUserInfo = __userInfo;
data.__getUserRepos = __userRepos;
data.__getAll = { informations: __userInfo, repos: __userRepos };
export default data;
