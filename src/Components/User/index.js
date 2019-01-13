import React from 'react';
import { Grid } from '@material-ui/core';
import styled from 'styled-components';
import { compose } from 'recompose';
import UserDetails from './UserDetails';
import UserAvatar from './UserAvatar';
import UserReposHeader from './UserReposHeader';
import UserReposList from './UserReposList';
import Loading from '../../hoc/Loading';
import HasError from '../../hoc/HasError';


const MainGrid = styled(Grid)`
  && {
    @media (max-width: 961px) {
      flex-direction: column;
    }
  }
`;

const AvatarAndInfoGrid = styled(Grid)`
  && {
    @media (max-width: 961px) {
      flex-direction: row;
    }
  }
`;

export const User = () => (
  <MainGrid container spacing={40} direction="row">
    <AvatarAndInfoGrid
      item
      xs={12}
      sm={12}
      md={3}
      container
      direction="column"
      justify="space-between"
      spacing={16}
    >
      <Grid item xs={12} sm={6} md="auto" container justify="center" alignItems="center">
        <UserAvatar />
      </Grid>
      <Grid item xs={12} sm={6} md="auto">
        <UserDetails />
      </Grid>
    </AvatarAndInfoGrid>
    <Grid item xs={12} sm={12} md={9} container justify="flex-end">
      <UserReposHeader />
      <UserReposList />
    </Grid>
  </MainGrid>
);

export default compose(
  Loading,
  HasError,
)(User);
