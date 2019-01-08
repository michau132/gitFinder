import axios from 'axios';
import apikey from '../../key';
import {
  fetchUserBegin,
  fetchUserInfoSucces,
  fetchUserError,
  fetchUserReposSuccess,
  fetchUserLoadingEnd,
} from './index';

const apkey = process.env.NODE_ENV === 'production' ? '' : apikey;

export function fetchData(url) {
  return (
    axios(url).then(result => result.data)
  );
}


export default function takeUserNameAndFetchData(name) {
  const userInfoUrl = `https://api.github.com/users/${name}${apkey}`;
  const userRepoUrl = `https://api.github.com/users/${name}/repos${apkey}`;

  return (dispatch) => {
    dispatch(fetchUserBegin());
    return Promise.all([
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
