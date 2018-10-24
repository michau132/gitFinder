function sortByDate(a, b) {
  if (a.pushed_at > b.pushed_at) { return -1; }
  if (a.pushed_at < b.pushed_at) { return 1; }
  return 0;
}

export default function sortByPushedDate(data) {
  const sortedData = data;
  sortedData.sort(sortByDate);
  return sortedData;
}
