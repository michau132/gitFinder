import React from 'react';
import PropTypes from 'prop-types';
import styles from './style.css';
import UserDetails from '../UserDetails';
import UserAvatar from '../UserAvatar';
import UserReposContainer from '../../Containers/UserReposContainer';

const UserView = ({ user }) => (
  <div className={styles.userView}>
    <div className={styles.userInfo}>
      <UserAvatar avatarUrl={user.userInfo.avatar_url} />
      <UserDetails userInfo={user.userInfo} />
    </div>
    <UserReposContainer {...user} />
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
        id: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
        forks_count: PropTypes.number,
        stargazers_count: PropTypes.number,
        description: PropTypes.string,
        html_url: PropTypes.string.isRequired,
      }),
    ).isRequired,
  }).isRequired,
};

export default UserView;
