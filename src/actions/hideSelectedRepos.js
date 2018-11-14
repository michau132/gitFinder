import { hideRepos } from './index';

export default function hideSelectedRepos(e) {
  return (dispatch, getState) => {
    e.preventDefault();
    const { selectedUserRepos, userReposFiltered } = getState().filterRepos;

    // comparing two arrays and hiding selected repositories
    const shownRepos = userReposFiltered.filter(item => (
      !selectedUserRepos.find(o => item.id === o.id)));
    dispatch(hideRepos(shownRepos));
  };
}
