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
  filterProjectsInput: '',
  allReposAreSelected: false,
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
    case types.FILTER_ON_KEY_UP: {
      const { userRepos, allUserRepos, selectedUserRepos } = state;
      const { val } = payload;
      const findMatchingRepos = value => repo => (
        repo.name.match(value) || (repo.description && repo.description.match(value))
      );
      const filteredRepos = allUserRepos.filter(findMatchingRepos(val));

      // checking in selectedUsers if to not delete checked users repositories
      const setReposToChecked = filteredRepos.map((item, i) => (
        (selectedUserRepos[i] && selectedUserRepos[i].id) === item.id
          ? ({ ...item, isChecked: true }) : item));

      const allReposAreShown = _.isEqual(filteredRepos, userRepos);
      return {
        ...state,
        userRepos: setReposToChecked,
        allReposAreShown,
        filterProjectsInput: val,
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
        selectedReposAreEmpty: checkedRepos.length === 0,
        allReposAreSelected: actualRepos.length === checkedRepos.length,
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
        allReposAreSelected: false,
      };
    }

    case types.SHOW_ALL_REPOS:
      return {
        ...state,
        userRepos: state.allUserRepos,
        allReposAreShown: true,
        selectedReposAreEmpty: true,
        filterProjectsInput: '',
        allReposAreSelected: false,
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
        selectedReposAreEmpty: selectedRepos.length === 0,
      };
    }
    case types.SELECT_ALL_REPOS: {
      const { userRepos } = state;
      let checkedSelectedRepos;
      let selectedReposAreEmpty;
      if (userRepos.every(item => item.isChecked === true)) {
        checkedSelectedRepos = userRepos.map(item => ({ ...item, isChecked: false }));
        selectedReposAreEmpty = true;
      } else {
        checkedSelectedRepos = userRepos.map(item => ({ ...item, isChecked: true }));
        selectedReposAreEmpty = false;
      }
      const selectedUserRepos = checkedSelectedRepos
        .filter(item => item.isChecked === true).map(o => o.id);
      const allReposAreSelected = selectedUserRepos.length === checkedSelectedRepos.length;
      return {
        ...state,
        userRepos: checkedSelectedRepos,
        selectedReposAreEmpty,
        selectedUserRepos,
        allReposAreSelected,
      };
    }
    default:
      return state;
  }
};
export default user;
