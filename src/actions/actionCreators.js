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
