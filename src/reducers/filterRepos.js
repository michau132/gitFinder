import * as types from '../actions/types';

const initialState = {
  userReposFiltered: [],
  selectedUserRepos: [],
  allReposAreShown: true,
  selectedReposAreEmpty: true,
};
const filterRepos = (state = initialState, action) => {
  switch (action.type) {
    case types.UPLOAD_FILTER_REPOS_DATA:
      return {
        ...state,
        userReposFiltered: action.repos,
      };
    case types.FILTER_ON_KEY_UP:
      return {
        ...state,
        userReposFiltered: action.repos,
        allReposAreShown: action.bool,
        selectedUserRepos: action.selectedRepos,
      };
    case types.SELECT_USER_REPO:
      return {
        ...state,
        userReposFiltered: action.repos,
        selectedUserRepos: action.selectedRepos,
        selectedReposAreEmpty: false,
      };
    case types.OPEN_SELECTED_REPOS:
      return {
        ...state,
        allReposAreShown: false,
        selectedUserRepos: [],
        selectedReposAreEmpty: true,
        userReposFiltered: action.repos,
      };
    case types.HIDE_SELECTED_REPOS:
      return {
        ...state,
        userReposFiltered: action.repos,
        allReposAreShown: false,
        selectedUserRepos: [],
        selectedReposAreEmpty: true,
      };
    case types.SHOW_ALL_REPOS:
      return {
        ...state,
        userReposFiltered: action.repos,
        allReposAreShown: true,
        selectedReposAreEmpty: true,
      };
    case types.HIDE_SINGLE_REPO:
      return {
        ...state,
        userReposFiltered: action.repos,
        selectedUserRepos: action.selectedRepos,
        allReposAreShown: false,
      };
    default:
      return state;
  }
};
export default filterRepos;
