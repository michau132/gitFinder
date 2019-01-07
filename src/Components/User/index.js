import React from 'react';
import PropTypes from 'prop-types';
import { Grid, withStyles } from '@material-ui/core';
import { compose } from 'recompose';
import UserDetails from './UserDetails';
import UserAvatar from './UserAvatar';
import UserReposContainer from '../../Containers/UserReposContainer';
import UserReposHeader from './UserReposHeader';
import UserReposList from './UserReposList';
import HasError from '../../hoc/HasError';
import Loading from '../../hoc/Loading';


const styles = theme => ({
  root: {
    [theme.breakpoints.down('md')]: {
      flexDirection: 'column',
    },
    [theme.breakpoints.up('md')]: {
      flexDirection: 'row',
    },
  },
  avatarAndInfo: {
    [theme.breakpoints.down('md')]: {
      flexDirection: 'row',
    },
    [theme.breakpoints.up('md')]: {
      flexDirection: 'column',
    },
  },
});

const User = ({ user, classes }) => {
  const { informations, repos, ...restUserProps } = user;
  return (
    <Grid container spacing={40} className={classes.root}>
      <Grid
        item
        xs={12}
        sm={12}
        md={3}
        container
        justify="space-between"
        spacing={16}
        className={classes.avatarAndInfo}
      >
        <Grid item xs={12} sm={6} md="auto" container justify="center" alignItems="center">
          <UserAvatar avatarUrl={informations.avatar_url} />
        </Grid>
        <Grid item xs={12} sm={6} md="auto">
          <UserDetails informations={informations} />
        </Grid>
      </Grid>
      <UserReposContainer
        render={
          ({ hideSingleRepo, selectUserRepo, ...propsFromContainer }) => (
            <Grid item xs={12} sm={12} md={9} container justify="flex-end">
              <UserReposHeader {...restUserProps} {...propsFromContainer} />
              <UserReposList
                repos={repos}
                hideSingleRepo={hideSingleRepo}
                selectUserRepo={selectUserRepo}
              />
            </Grid>
          )}
      />
    </Grid>
  );
};

User.propTypes = {
  user: PropTypes.shape({
    informations: PropTypes.shape({
      login: PropTypes.string.isRequired,
      email: PropTypes.string,
      avatar_url: PropTypes.string,
      name: PropTypes.string,
    }).isRequired,
    repos: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
        forks_count: PropTypes.number,
        stargazers_count: PropTypes.number,
        description: PropTypes.string,
        html_url: PropTypes.string.isRequired,
      }),
    ).isRequired,
  }).isRequired,
};

export default compose(
  withStyles(styles),
  HasError,
  Loading,
)(User);
