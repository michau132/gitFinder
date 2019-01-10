
function fetchData(url) {
  if (url.indexOf('repos') > -1) {
    return Promise.resolve({ data: [{ id: 1, name: 'repo1' }, { id: 2, name: 'repo2' }] });
  }
  return Promise.resolve({ data: { login: 'a', email: 'ab@c.com' } });
}

export default fetchData;
