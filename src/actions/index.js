import * as types from './types';

export const fetchUserInfo = () => ({
  type: types.GET_USER_REPOSITORIES,
});

export const getUser = name => ({
  type: types.GET_USER,
  name,
});

export const fetchUserBegin = () => ({
  type: types.FETCH_USER_BEGIN,
});

export const fetchUserInfoSucces = user => ({
  type: types.FETCH_USER_INFO_SUCCESS,
  user,
});

export const fetchUserReposSuccess = repos => ({
  type: types.FETCH_USER_REPOS_SUCCESS,
  repos,
});

export const fetchUserError = message => ({
  type: types.FETCH_USER_ERROR,
  message,
});

export const fetchUserLoadingEnd = () => ({
  type: types.FETCH_USER_LOADING_END,
});

export const uploadFilterReposData = repos => ({
  type: types.UPLOAD_FILTER_REPOS_DATA,
  repos,
});

export const setReposOnKeyUp = (repos, bool) => ({
  type: types.FILTER_ON_KEY_UP,
  repos,
  bool,
});

export const selectedUserRepo = (repos, selectedRepos) => ({
  type: types.SELECT_USER_REPO,
  repos,
  selectedRepos,
});

export const openLinks = repos => ({
  type: types.OPEN_SELECTED_REPOS,
  repos,
});

export const hideRepos = repos => ({
  type: types.HIDE_SELECTED_REPOS,
  repos,
});

export const showAll = repos => ({
  type: types.SHOW_ALL_REPOS,
  repos,
});

export const hideRepo = (repos, selectedRepos) => ({
  type: types.HIDE_SINGLE_REPO,
  repos,
  selectedRepos,
});
