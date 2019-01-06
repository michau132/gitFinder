import React from 'react';
import PropTypes from 'prop-types';
import { Grid, withStyles } from '@material-ui/core';
import UserDetails from './UserDetails';
import UserAvatar from './UserAvatar';
import UserReposContainer from '../../Containers/UserReposContainer';
import UserReposHeader from './UserReposHeader';
import UserReposList from './UserReposList';

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

const UserView = ({ user, classes }) => {
  const { userInfo, userRepos, ...restUserProps } = user;
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
          <UserAvatar avatarUrl={userInfo.avatar_url} />
        </Grid>
        <Grid item xs={12} sm={6} md="auto">
          <UserDetails userInfo={userInfo} />
        </Grid>
      </Grid>
      <UserReposContainer
        render={
          ({ hideSingleRepo, selectUserRepo, ...propsFromContainer }) => (
            <Grid item xs={12} sm={12} md={9} container justify="flex-end">
              <UserReposHeader {...restUserProps} {...propsFromContainer} />
              <UserReposList
                userRepos={userRepos}
                hideSingleRepo={hideSingleRepo}
                selectUserRepo={selectUserRepo}
              />
            </Grid>
          )}
      />
    </Grid>
  );
};

UserView.propTypes = {
  user: PropTypes.shape({
    userInfo: PropTypes.shape({
      login: PropTypes.string.isRequired,
      email: PropTypes.string,
      avatar_url: PropTypes.string,
      name: PropTypes.string,
    }).isRequired,
    userRepos: PropTypes.arrayOf(
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

export default withStyles(styles)(UserView);
