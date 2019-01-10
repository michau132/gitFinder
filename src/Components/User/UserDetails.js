import React from 'react';
import PropTypes from 'prop-types';
import {
  Card, CardContent, Typography, CardActions, Button,
} from '@material-ui/core';
import styled from 'styled-components';

const StyledCard = styled(Card)`
  border: 2px solid black;
  width: 100%;
`;

const UserDetails = ({
  informations: {
    name, login, email, location,
  },
}) => (
  <StyledCard>
    <CardContent>
      <Typography variant="h6" component="h6" gutterBottom>{name}</Typography>
      <Typography variant="subtitle1">{login}</Typography>
      <Typography variant="subtitle1">{email}</Typography>
      <Typography variant="subtitle1">{location}</Typography>
    </CardContent>
    <CardActions>
      <Button
        href={`https://github.com/${login}`}
        variant="outlined"
        size="small"
      >
        Show profile
      </Button>
    </CardActions>
  </StyledCard>
);


UserDetails.propTypes = {
  informations: PropTypes.shape({
    login: PropTypes.string.isRequired,
    email: PropTypes.string,
    avatar_url: PropTypes.string,
    name: PropTypes.string,
  }).isRequired,
};

export default UserDetails;
