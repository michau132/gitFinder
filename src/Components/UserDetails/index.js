import React from 'react';
import PropTypes from 'prop-types';
import styles from './style.css';

const UserDetails = ({
  userInfo: {
    name, login, email, location,
  },
}) => (
  <section className={styles.userDetails}>
    <h2>Public data</h2>
    <h4>{name}</h4>
    <h5>{login}</h5>
    <p>
      Email:
      {email}
    </p>
    <p>
      Location:
      {location}
    </p>
  </section>
);

UserDetails.propTypes = {
  userInfo: PropTypes.shape({
    login: PropTypes.string.isRequired,
    email: PropTypes.string,
    avatar_url: PropTypes.string,
    name: PropTypes.string,
  }).isRequired,
};

export default UserDetails;
