import 'whatwg-fetch';
import {
  fetchUserBegin,
  fetchUserInfoSucces,
  fetchUserError,
  fetchUserReposSuccess,
} from './actionCreators';

function fetchData(dispatch, data) {
  dispatch(fetchUserBegin());
  return (
    fetch(data.url)
      .then(result => result.json())
      .then(that => dispatch(data.method(that)))
      .catch((err) => {
        console.log(`ERROR!${err}`);
        dispatch(fetchUserError(err.message));
      })
  );
}


export default function takeUserNameAndFetchData(name) {
  const userInfo = {
    url: `https://api.github.com/users/${name}`,
    method: fetchUserInfoSucces,
  };
  const userRepo = {
    url: `https://api.github.com/users/${name}/repos`,
    method: fetchUserReposSuccess,
  };
  return (dispatch) => {
    fetchData(dispatch, userInfo);
    fetchData(dispatch, userRepo);
  };
}
