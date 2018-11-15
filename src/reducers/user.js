import _ from 'lodash';
import * as types from '../actions/types';

function sortByDate(a, b) {
  if (a.pushed_at > b.pushed_at) {
    return -1;
  }
  if (a.pushed_at < b.pushed_at) {
    return 1;
  }
  return 0;
}


const initialState = {
  userInfo: {
    login: '',
    email: '',
    avatar_url: '',
    name: '',
  },
  userRepos: [],
  isLoading: false,
  error: null,
  selectedUserRepos: [],
  allReposAreShown: true,
  selectedReposAreEmpty: true,
  allUserRepos: [],
};
const user = (state = initialState, action) => {
  const { payload } = action;
  switch (action.type) {
    case types.FETCH_USER_BEGIN:
      return {
        ...state,
        isLoading: true,
        error: null,
      };
    case types.FETCH_USER_INFO_SUCCESS:
      return {
        ...state,
        userInfo: payload.user,
        error: null,
        isLoading: true,
      };
    case types.FETCH_USER_REPOS_SUCCESS: {
      const sortedData = payload.repos;
      sortedData.sort(sortByDate);
      return { ...state, userRepos: sortedData, allUserRepos: sortedData };
    }
    case types.FETCH_USER_LOADING_END:
      return {
        ...state,
        isLoading: false,
      };
    case types.FETCH_USER_ERROR:
      return {
        ...state,
        error: payload.message,
      };
    case types.UPLOAD_FILTER_REPOS_DATA:
      return {
        ...state,
        userReposFiltered: payload.repos,
      };
    case types.FILTER_ON_KEY_UP: {
      const { userRepos } = state;
      const { selectedUserRepos } = state;
      const findMatchingRepos = value => repo => (
        repo.name.match(value) || (repo.description && repo.description.match(value))
      );
      const userReposFiltered = userRepos.filter(findMatchingRepos(payload.val));
      const checkSelectedRepos = userReposFiltered.filter(item => (
        selectedUserRepos.find(o => item.id === o.id)));
      const setRepoToChecked = userReposFiltered.map((item, i) => (
        (checkSelectedRepos[i] && checkSelectedRepos[i].id) === item.id
          ? ({ ...item, isChecked: true }) : item));
      const allReposAreShown = _.isEqual(userReposFiltered, userRepos);
      return {
        ...state,
        userReposFiltered: setRepoToChecked,
        allReposAreShown,
        selectedUserRepos: checkSelectedRepos,
      };
    }
    case types.SELECT_USER_REPO: {
      let checkedRepos;
      let actualRepos;
      const { userRepos, selectedUserRepos } = state;
      const { id } = payload;
      const getUserById = val => repo => repo.id === val;
      const foundIndex = userRepos.findIndex(getUserById(id));
      const currentRepo = userRepos[foundIndex];
      const prevRepos = userRepos.slice(0, foundIndex);
      const nextRepos = userRepos.slice(foundIndex + 1);

      if (selectedUserRepos.some(o => o === id)) {
        checkedRepos = selectedUserRepos.filter(item => item !== id);
        actualRepos = [...prevRepos, { ...currentRepo, isChecked: false }, ...nextRepos];
      } else {
        checkedRepos = [...selectedUserRepos, id];
        actualRepos = [...prevRepos, { ...currentRepo, isChecked: true }, ...nextRepos];
      }

      return {
        ...state,
        userRepos: actualRepos,
        selectedUserRepos: checkedRepos,
        selectedReposAreEmpty: false,
      };
    }
    case types.OPEN_SELECTED_REPOS: {
      const openInNewTab = url => window.open(url, '_blank');
      const { selectedUserRepos } = state;
      selectedUserRepos.forEach(item => openInNewTab(item.html_url));
      return state;
    }

    case types.HIDE_SELECTED_REPOS: {
      const { selectedUserRepos, userRepos } = state;

      // comparing two arrays and hiding selected repositories
      const shownRepos = userRepos.filter(item => (
        !selectedUserRepos.find(o => item.id === o)));
      return {
        ...state,
        userRepos: shownRepos,
        allReposAreShown: false,
        selectedUserRepos: [],
        selectedReposAreEmpty: true,
      };
    }

    case types.SHOW_ALL_REPOS:
      return {
        ...state,
        userRepos: state.allUserRepos,
        allReposAreShown: true,
        selectedReposAreEmpty: true,
      };
    case types.HIDE_SINGLE_REPO: {
      const { userRepos, selectedUserRepos } = state;
      const { id } = payload;
      const actualRepos = userRepos.filter(item => item.id !== id);
      const selectedRepos = selectedUserRepos.filter(item => item !== id);
      return {
        ...state,
        userRepos: actualRepos,
        selectedUserRepos: selectedRepos,
        allReposAreShown: false,
      };
    }
    default:
      return state;
  }
};
export default user;
