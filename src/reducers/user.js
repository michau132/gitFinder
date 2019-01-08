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
  informations: {
    login: '',
    email: '',
    avatar_url: '',
    name: '',
  },
  repos: [],
  isLoading: false,
  error: null,
  isShowAllBtnDisabled: true,
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
        informations: payload.informations,
        error: null,
      };

    case types.FETCH_USER_REPOS_SUCCESS: {
      const sortedData = payload.repos;
      sortedData.sort(sortByDate);
      return { ...state, repos: sortedData };
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
        isLoading: false,
      };

    case types.FILTER_ON_KEY_UP: {
      const { repos } = state;
      const { val } = payload;
      let matchedRepos;
      if (val !== ' ') {
        const findMatchingRepos = value => repo => (
          (repo.name.includes(value) || (repo.description && repo.description.includes(value))
            ? { ...repo, isFounded: true } : { ...repo, isFounded: false }
          )
        );
        matchedRepos = repos.map(findMatchingRepos(val));
        if (val === '') {
          matchedRepos = repos.map(repo => ({ ...repo, isFounded: false }));
        }
        return {
          ...state,
          repos: matchedRepos,
          filterProjectsInput: val,
          isShowAllBtnDisabled: false,
        };
      }
      return state;
    }

    case types.SELECT_USER_REPO: {
      let actualRepos;
      const { repos } = state;
      const { id } = payload;
      const getUserById = val => repo => repo.id === val;
      const foundIndex = repos.findIndex(getUserById(id));
      const currentRepo = repos[foundIndex];
      const prevRepos = repos.slice(0, foundIndex);
      const nextRepos = repos.slice(foundIndex + 1);

      if (currentRepo.isChecked) {
        actualRepos = [...prevRepos, { ...currentRepo, isChecked: false }, ...nextRepos];
      } else {
        actualRepos = [...prevRepos, { ...currentRepo, isChecked: true }, ...nextRepos];
      }
      const selectedReposAreEmpty = !actualRepos.some(checkIfRepoIsSetToTrue());
      const allReposAreSelected = actualRepos.every(checkIfRepoIsSetToTrue());
      return {
        ...state,
        repos: actualRepos,
        selectedReposAreEmpty,
        allReposAreSelected,
        isShowAllBtnDisabled: false,
      };
    }

    case types.OPEN_SELECTED_REPOS: {
      const openInNewTab = url => window.open(url, '_blank');
      const { repos } = state;
      repos.forEach(repo => repo.isChecked && openInNewTab(repo.html_url));
      return state;
    }

    case types.HIDE_SELECTED_REPOS: {
      const { repos } = state;
      const selectedRepos = repos.map(repo => (
        (repo.isChecked === true || repo.isHidden === true)
          ? { ...repo, isHidden: true, isChecked: false } : { ...repo, isHidden: false }));

      return {
        ...state,
        repos: selectedRepos,
        isShowAllBtnDisabled: false,
        selectedReposAreEmpty: true,
        allReposAreSelected: false,
      };
    }

    case types.SHOW_ALL_REPOS: {
      const { repos } = state;
      const allReposVisible = repos.map(repo => (
        {
          ...repo, isHidden: false, isChecked: false, isFounded: false,
        }));
      return {
        ...state,
        repos: allReposVisible,
        isShowAllBtnDisabled: true,
        selectedReposAreEmpty: true,
        filterProjectsInput: '',
        allReposAreSelected: false,
      };
    }

    case types.HIDE_SINGLE_REPO: {
      const { repos } = state;
      const { id } = payload;
      const actualRepos = repos.map(repo => (
        repo.id === id ? { ...repo, isHidden: true, isChecked: false } : repo));
      const selectedReposAreEmpty = !actualRepos.some(checkIfRepoIsSetToTrue());
      return {
        ...state,
        repos: actualRepos,
        isShowAllBtnDisabled: false,
        selectedReposAreEmpty,
      };
    }
    case types.SELECT_ALL_REPOS: {
      const { repos } = state;
      const areAllReposAreHidden = repos.every(repo => repo.isHidden === true);
      if (areAllReposAreHidden) {
        return {
          ...state,
        };
      }
      let checkedSelectedRepos;
      if (repos.every(checkIfRepoIsSetToTrue())) {
        checkedSelectedRepos = repos.map(repo => ({ ...repo, isChecked: false }));
      } else {
        checkedSelectedRepos = repos.map(repo => ({ ...repo, isChecked: true }));
      }
      const allReposAreSelected = checkedSelectedRepos.every(checkIfRepoIsSetToTrue());
      return {
        ...state,
        repos: checkedSelectedRepos,
        selectedReposAreEmpty: !allReposAreSelected,
        allReposAreSelected,
      };
    }
    default:
      return state;
  }
};
export default user;
