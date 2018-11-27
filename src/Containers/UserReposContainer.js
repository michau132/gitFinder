import React from 'react';
import { connect } from 'react-redux';
import {
  setReposOnKeyUp,
  selectUserRepo,
  openSelectedRepos,
  hideSelectedRepos,
  hideSingleRepo,
  showAllRepos,
  selectAllRepos,
} from '../actions';
import openSingleRepo from '../actions/openSingleRepo';
import UserRepos from '../Components/UserRepos';

const UserReposContainer = props => <UserRepos {...props} />;

const mapDispatchToProps = {
  setReposOnKeyUp,
  selectUserRepo,
  openSelectedRepos,
  hideSelectedRepos,
  showAllRepos,
  hideSingleRepo,
  openSingleRepo,
  selectAllRepos,
};

export { UserReposContainer };

export default connect(null, mapDispatchToProps)(UserReposContainer);
