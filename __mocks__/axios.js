
function fetchData(url) {
  if (url.indexOf('repos') > -1) {
    return Promise.resolve({
      data: [
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
  }
  return Promise.resolve({
    data: {
      name: 'Adam Oko',
      login: 'aOko123',
      email: 'aoko123@gmail.com',
      loctation: 'Raszyn',
      avatar_url: 'https://via.placeholder.com/150',
    },
  });
}

export default fetchData;
