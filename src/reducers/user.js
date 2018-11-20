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

const checkIfRepoIsSetToTrue = () => repo => repo.isChecked === true;

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
  allReposAreShown: true,
  selectedReposAreEmpty: true,
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
        userInfo: payload.userInfo,
        error: null,
        isLoading: true,
      };

    case types.FETCH_USER_REPOS_SUCCESS: {
      const sortedData = payload.repos;
      sortedData.sort(sortByDate);
      return { ...state, userRepos: sortedData };
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
      const { userRepos } = state;
      const { val } = payload;
      let matchedRepos;
      if (val !== ' ') {
        const findMatchingRepos = value => repo => (
          (repo.name.match(value) || (repo.description && repo.description.match(value))
            ? { ...repo, isFounded: true } : { ...repo, isFounded: false }
          )
        );
        matchedRepos = userRepos.map(findMatchingRepos(val));
        if (val === '') {
          matchedRepos = userRepos.map(repo => ({ ...repo, isFounded: false }));
        }
        return {
          ...state,
          userRepos: matchedRepos,
          filterProjectsInput: val,
        };
      }
      return state;
    }

    case types.SELECT_USER_REPO: {
      let actualRepos;
      const { userRepos } = state;
      const { id } = payload;
      const getUserById = val => repo => repo.id === val;
      const foundIndex = userRepos.findIndex(getUserById(id));
      const currentRepo = userRepos[foundIndex];
      const prevRepos = userRepos.slice(0, foundIndex);
      const nextRepos = userRepos.slice(foundIndex + 1);

      if (userRepos.some(repo => repo.id === id && repo.isChecked === true)) {
        actualRepos = [...prevRepos, { ...currentRepo, isChecked: false }, ...nextRepos];
      } else {
        actualRepos = [...prevRepos, { ...currentRepo, isChecked: true }, ...nextRepos];
      }
      const selectedReposAreEmpty = !actualRepos.some(checkIfRepoIsSetToTrue());
      const allReposAreSelected = actualRepos.every(checkIfRepoIsSetToTrue());
      return {
        ...state,
        userRepos: actualRepos,
        selectedReposAreEmpty,
        allReposAreSelected,
      };
    }

    case types.OPEN_SELECTED_REPOS: {
      const openInNewTab = url => window.open(url, '_blank');
      const { userRepos } = state;
      userRepos.forEach(repo => repo.isChecked && openInNewTab(repo.html_url));
      return state;
    }

    case types.HIDE_SELECTED_REPOS: {
      const { userRepos } = state;
      const selectedRepos = userRepos.map(
        repo => ((repo.isChecked === true) ? { ...repo, isHidden: true } : repo),
      );

      return {
        ...state,
        userRepos: selectedRepos,
        allReposAreShown: false,
        selectedReposAreEmpty: true,
        allReposAreSelected: false,
      };
    }

    case types.SHOW_ALL_REPOS: {
      const { userRepos } = state;
      const allReposVisible = userRepos.map(repo => (
        {
          ...repo, isHidden: false, isChecked: false, isFounded: false,
        }));
      return {
        ...state,
        userRepos: allReposVisible,
        allReposAreShown: true,
        selectedReposAreEmpty: true,
        filterProjectsInput: '',
        allReposAreSelected: false,
      };
    }

    case types.HIDE_SINGLE_REPO: {
      const { userRepos } = state;
      const { id } = payload;
      const actualRepos = userRepos.map(repo => (
        repo.id === id ? { ...repo, isHidden: true, isChecked: false } : repo));
      const selectedReposAreEmpty = userRepos.every(checkIfRepoIsSetToTrue());
      return {
        ...state,
        userRepos: actualRepos,
        allReposAreShown: false,
        selectedReposAreEmpty,
      };
    }
    case types.SELECT_ALL_REPOS: {
      const { userRepos } = state;
      let checkedSelectedRepos;
      if (userRepos.every(checkIfRepoIsSetToTrue())) {
        checkedSelectedRepos = userRepos.map(repo => ({ ...repo, isChecked: false }));
      } else {
        checkedSelectedRepos = userRepos.map(repo => ({ ...repo, isChecked: true }));
      }
      const allReposAreSelected = checkedSelectedRepos.every(checkIfRepoIsSetToTrue());
      return {
        ...state,
        userRepos: checkedSelectedRepos,
        selectedReposAreEmpty: !allReposAreSelected,
        allReposAreSelected,
      };
    }
    default:
      return state;
  }
};
export default user;
