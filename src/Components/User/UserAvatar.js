import React from 'react';
import styled from 'styled-components';
import { observer, PropTypes, inject } from 'mobx-react';

const Image = styled.img`
  object-fit: contain;
  max-width: 100%;
  max-height: 100%;
`;

const UserAvatar = ({ store: { informations: { avatar_url } } }) => (
  <Image src={avatar_url} alt="avatar" />
);

UserAvatar.propTypes = {
  store: PropTypes.observableObject.isRequired,
};

export default inject('store')(observer(UserAvatar));
