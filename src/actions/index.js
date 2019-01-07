import * as types from './types';

export const createAction = (type, payload = {}) => ({ type, payload });

export const fetchUserInfo = () => createAction(types.GET_USER_REPOSITORIES);

export const getUser = name => createAction(types.GET_USER, { name });

export const fetchUserBegin = () => createAction(types.FETCH_USER_BEGIN);

export const fetchUserInfoSucces = informations => (
  createAction(types.FETCH_USER_INFO_SUCCESS, { informations }));

export const fetchUserReposSuccess = repos => (
  createAction(types.FETCH_USER_REPOS_SUCCESS, { repos }));

export const fetchUserError = message => createAction(types.FETCH_USER_ERROR, { message });

export const fetchUserLoadingEnd = () => createAction(types.FETCH_USER_LOADING_END);

export const setReposOnKeyUp = val => createAction(types.FILTER_ON_KEY_UP, { val });

export const selectUserRepo = id => (
  createAction(types.SELECT_USER_REPO, { id }));

export const openSelectedRepos = () => createAction(types.OPEN_SELECTED_REPOS);

export const hideSelectedRepos = () => createAction(types.HIDE_SELECTED_REPOS);

export const showAllRepos = () => createAction(types.SHOW_ALL_REPOS);

export const hideSingleRepo = id => createAction(types.HIDE_SINGLE_REPO, { id });

export const selectAllRepos = () => createAction(types.SELECT_ALL_REPOS);
