import React from 'react';
import PropTypes from 'prop-types';
import UserInfo from './UserInfo';
import UserRepos from './UserRepos';
import LoaderHOC from '../LoaderHOC/LoaderHOC';

const UserView = ({ user }) => (
  <div>
    <UserInfo userInfo={user.userInfo} />
    <UserRepos userRepos={user.userRepos} />
  </div>
);

UserView.propTypes = {
  user: PropTypes.shape({
    userInfo: PropTypes.shape({
      login: PropTypes.string.isRequired,
      email: PropTypes.string,
      avatar_url: PropTypes.string,
      name: PropTypes.string,
    }).isRequired,
    userRepos: PropTypes.arrayOf(
      PropTypes.shape({
        name: PropTypes.string.isRequired,
        pushed_at: PropTypes.string.isRequired,
      }),
    ).isRequired,
  }).isRequired,
};

export default LoaderHOC(UserView);
