import { hideRepo } from '.';

export default function hideSingleRepo(id) {
  return (dispatch, getState) => {
    const { userReposFiltered, selectedUserRepos } = getState().filterRepos;
    const actualRepos = userReposFiltered.filter(item => item.id !== id);
    const selectedRepos = selectedUserRepos.filter(item => item.id !== id);
    dispatch(hideRepo(actualRepos, selectedRepos));
  };
}
