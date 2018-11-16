import React from 'react';
import PropTypes from 'prop-types';
import styles from './style.css';
import UserDetails from '../UserDetails';
import LoaderHOC from '../../hoc/LoaderHOC';
import UserAvatar from '../UserAvatar';
import UserReposContainer from '../../Containers/UserReposContainer';

const UserView = ({ user }) => (
  <div className={styles.userView}>
    <div className={styles.userInfo}>
      <UserAvatar avatarUrl={user.userInfo.avatar_url} />
      <UserDetails userInfo={user.userInfo} />
    </div>
    <UserReposContainer userRepos={user.userRepos} />
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
