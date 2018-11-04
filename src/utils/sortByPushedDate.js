function sortByDate(a, b) {
  if (a.pushed_at > b.pushed_at) { return -1; }
  if (a.pushed_at < b.pushed_at) { return 1; }
  return 0;
}

export default function sortByPushedDate(state, repos) {
  let newState;
  try {
    const sortedData = repos;
    sortedData.sort(sortByDate);
    newState = { ...state, userRepos: sortedData };
  } catch (e) {
    console.log(`Chekck if user exists${e.message}`);
  }
  return newState;
}
