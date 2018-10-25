import React from 'react';
import PropTypes from 'prop-types';
import UserReposListItem from './UserReposListItem';

const UserRepos = ({ userRepos }) => (
  <ul>
    <h4>Repositiories:</h4>
    {
      userRepos.map(listItem => (
        <UserReposListItem listItem={listItem} key={listItem.id} />
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
