import _ from 'lodash';
import { setReposOnKeyUp } from './index';

export default function filterOnKeyUp(event) {
  return (dispatch, getState) => {
    const { userRepos } = getState().user;
    const findMatchingRepos = value => repo => (
      repo.name.match(value) || repo.description && repo.description.match(value)
    );
    const userReposFiltered = userRepos.filter(findMatchingRepos(event.target.value));
    const allReposAreShown = _.isEqual(userReposFiltered, userRepos);
    dispatch(setReposOnKeyUp(userReposFiltered, allReposAreShown));
  };
}
