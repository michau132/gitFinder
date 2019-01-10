import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Image = styled.img`
  object-fit: contain;
  max-width: 100%;
  max-height: 100%;
`;

const UserAvatar = ({ avatarUrl }) => (
  <Image src={avatarUrl} alt="avatar" />
);

UserAvatar.propTypes = {
  avatarUrl: PropTypes.string.isRequired,
};

export default UserAvatar;
