import _ from 'lodash';
import { setReposOnKeyUp } from './index';

export default function filterOnKeyUp(event) {
  return (dispatch, getState) => {
    const { userRepos } = getState().user;
    const { selectedUserRepos } = getState().filterRepos;
    const findMatchingRepos = value => repo => (
      repo.name.match(value) || (repo.description && repo.description.match(value))
    );
    const userReposFiltered = userRepos.filter(findMatchingRepos(event.target.value));
    const checkSelectedRepos = userReposFiltered.filter(item => selectedUserRepos.find(o => item.id === o.id));
    const setRepoToChecked = userReposFiltered.map((item, i) => (checkSelectedRepos[i] && checkSelectedRepos[i].id) === item.id ? ({...item, isChecked: true}) : item);
    const allReposAreShown = _.isEqual(userReposFiltered, userRepos);
    dispatch(setReposOnKeyUp(setRepoToChecked, allReposAreShown, checkSelectedRepos));
  };
}
