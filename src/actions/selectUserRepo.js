import { selectedUserRepo } from './index';

export default function selectUserRepo(id) {
  return (dispatch, getState) => {
    let checkedRepos;
    let actualRepos;
    const { userReposFiltered, selectedUserRepos } = getState().filterRepos;
    const getUserById = id => repo => repo.id === id;
    const foundIndex = userReposFiltered.findIndex(getUserById(id));
    const currentRepo = userReposFiltered[foundIndex];
    const prevRepos = userReposFiltered.slice(0, foundIndex);
    const nextRepos = userReposFiltered.slice(foundIndex + 1);

    if (selectedUserRepos.some(getUserById(id))) {
      checkedRepos = selectedUserRepos.filter(item => item.id !== id);
      actualRepos = [...prevRepos, { ...currentRepo, isChecked: false }, ...nextRepos];
    } else {
      checkedRepos = [...selectedUserRepos, currentRepo];
      actualRepos = [...prevRepos, { ...currentRepo, isChecked: true }, ...nextRepos];
    }

    dispatch(selectedUserRepo(actualRepos, checkedRepos));
  };
}
