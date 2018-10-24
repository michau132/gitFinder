import React from 'react';
import PropTypes from 'prop-types';
import UserRepoListItem from './UserRepoListItem';

const UserRepos = ({ userRepos }) => (
  <ul className="container__userInfoRepoList">
    <h4>Repositiories:</h4>
    {
      userRepos.map(listItem => (
        <UserRepoListItem listItem={listItem} key={listItem.id} />
      ))
    }
  </ul>
);

UserRepos.propTypes = {
  userRepos: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      pushed_at: PropTypes.string.isRequired,
    }),
  ).isRequired,
};

export default UserRepos;
