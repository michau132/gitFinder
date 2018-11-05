import { showAll } from '.';

export default function showAllRepos(e) {
  return (dispatch, getState) => {
    e.preventDefault();
    const { userRepos } = getState().user;
    dispatch(showAll(userRepos));
  };
}
