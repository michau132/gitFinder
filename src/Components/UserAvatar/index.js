import React from 'react';
import PropTypes from 'prop-types';
import styles from './style.css';

const UserAvatar = ({ avatarUrl }) => (
  <div className={styles.userAvatar}>
    <img src={avatarUrl} alt="avatar" className={styles.avatar} />
  </div>
);

UserAvatar.propTypes = {
  avatarUrl: PropTypes.string.isRequired,
};

export default UserAvatar;
