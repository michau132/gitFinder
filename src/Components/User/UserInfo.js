import React from 'react';
import PropTypes from 'prop-types';

const UserInfo = ({ userInfo }) => (
  <section>
    <h2>{userInfo.name}</h2>
    <h3>{userInfo.login}</h3>
    <p>
        Email:
      {userInfo.email}
    </p>
    <img src={userInfo.avatar_url} alt="avatar" />
  </section>
);


UserInfo.propTypes = {
  userInfo: PropTypes.shape({
    login: PropTypes.string.isRequired,
    email: PropTypes.string,
    avatar_url: PropTypes.string,
    name: PropTypes.string,
  }).isRequired,
};

export default UserInfo;
