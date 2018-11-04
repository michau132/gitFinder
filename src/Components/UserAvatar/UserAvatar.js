import React from 'react';
import PropTypes from 'prop-types';
import styles from './style.css';

const UserAvatar = ({ avatar }) => {
  return (
    <div className={styles.userAvatar}>
      <img src={avatar} alt="avatar" className={styles.avatar} />
    </div>
  );
};

UserAvatar.propTypes = {
  
};

export default UserAvatar;