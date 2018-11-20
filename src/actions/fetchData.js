import fetch from 'isomorphic-fetch';
import {
  fetchUserBegin,
  fetchUserInfoSucces,
  fetchUserError,
  fetchUserReposSuccess,
  fetchUserLoadingEnd,
} from './index';

function fetchData(url) {
  return (
    fetch(url)
      .then(result => result.json())
  );
}


export default function takeUserNameAndFetchData(name) {
  const userInfoUrl = `https://api.github.com/users/${name}`;
  const userRepoUrl = `https://api.github.com/users/${name}/repos`;

  return (dispatch) => {
    dispatch(fetchUserBegin());
    Promise.all([
      fetchData(userInfoUrl),
      fetchData(userRepoUrl),
    ])
      .then(([info, repos]) => {
        dispatch(fetchUserInfoSucces(info));
        dispatch(fetchUserReposSuccess(repos));
        dispatch(fetchUserLoadingEnd());
      })
      .catch((err) => {
        dispatch(fetchUserError(err));
      });
  };
}
