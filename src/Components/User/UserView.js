import React from 'react';
import PropTypes from 'prop-types';
import UserInfo from './UserInfo';
import UserRepos from './UserRepos';

const UserView = ({ userInfo, userRepos }) => (
  <div>
    <UserInfo userInfo={userInfo} />
    <UserRepos userRepos={userRepos} />
  </div>
);

UserView.propTypes = {
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
};

export default UserView;
