import React from 'react';
import PropTypes from 'prop-types';

const UserInfo = ({ userInfo }) => (
  <section className="container__userInfo">
    <h2 className="container__userInfo-name">{userInfo.name}</h2>
    <h3 className="container__userInfo-login">{userInfo.login}</h3>
    <p className="container__userInfo-email">
        Email:
      {userInfo.email}
    </p>
    <img src={userInfo.avatar_url} alt="avatar" className="container__userInfo-avatar" />
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
