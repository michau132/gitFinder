import { hideRepo } from '.';

export default function hideSingleRepo(id) {
  return (dispatch, getState) => {
    const { userReposFiltered } = getState().filterRepos;
    const actualRepos = userReposFiltered.filter(item => item.id !== id);
    dispatch(hideRepo(actualRepos));
  };
}
