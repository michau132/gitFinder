import React from 'react';
import { observer, PropTypes, inject } from 'mobx-react';
import {
  Card, CardContent, Typography, CardActions, Button,
} from '@material-ui/core';
import styled from 'styled-components';

const StyledCard = styled(Card)`
  border: 2px solid black;
  width: 100%;
`;

const UserDetails = ({
  store: {
    informations: {
      name, login, email, location,
    },
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
  store: PropTypes.observableObject.isRequired,
};

export default inject('store')(observer(UserDetails));
