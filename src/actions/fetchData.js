import 'whatwg-fetch';
import {
  fetchUserBegin,
  fetchUserInfoSucces,
  fetchUserError,
  fetchUserReposSuccess,
  fetchUserLoadingEnd,
} from './actionCreators';

function fetchData(url) {
  return (
    fetch(url)
      .then(result => result.json())
  );
}


export default function takeUserNameAndFetchData(name) {
  const userInfoUrl = `https://api.github.com/users/${name}?client_id=fccd37f38519b0d71cd7&client_secret=61572c304be174f925b52e267794cf5c9f768e00`;
  const userRepoUrl = `https://api.github.com/users/${name}/repos?client_id=fccd37f38519b0d71cd7&client_secret=61572c304be174f925b52e267794cf5c9f768e00`;

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
        console.log(`ERROR!${err}`);
        dispatch(fetchUserError());
      });
  };
}
