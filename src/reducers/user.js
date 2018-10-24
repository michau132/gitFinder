import * as types from '../actions/types';

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
};
const user = (state = initialState, action) => {
  switch (action.type) {
    case types.FETCH_USER_BEGIN:
      return {
        ...state, isLoading: true, error: null,
      };
    case types.FETCH_USER_INFO_SUCCESS:
      return {
        ...state, userInfo: action.user, error: null, isLoading: true,
      };
    case types.FETCH_USER_REPOS_SUCCESS:
      return {
        ...state, userRepos: action.repos, isLoading: false, error: null,
      };
    case types.FETCH_USER_ERROR:
      return {
        ...state, error: action.message,
      };
    default:
      return state;
  }
};
export default user;
