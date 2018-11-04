import * as types from '../actions/types';
import sortByPushedDate from '../utils/sortByPushedDate';

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
      return sortByPushedDate(state, action.repos);
    case types.FETCH_USER_LOADING_END:
      return {
        ...state, isLoading: false,
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
