function sortByDate(a, b) {
  if (a.pushed_at > b.pushed_at) { return -1; }
  if (a.pushed_at < b.pushed_at) { return 1; }
  return 0;
}

export default function sortByPushedDate(state, repos) {
  const sortedData = repos;
  sortedData.sort(sortByDate);
  return { ...state, isLoading: false, userRepos: sortedData };
}
