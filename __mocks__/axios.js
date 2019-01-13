
function fetchData(url) {
  if (url.indexOf('repos') > -1) {
    return Promise.resolve({
      data: [
        {
          id: 1,
          name: 'firstRepo',
          description: 'First repo description',
        },
        {
          id: 2,
          name: 'secondRepo',
          description: 'Second repo description',
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
