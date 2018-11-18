import React from 'react';
import { connect } from 'react-redux';
import {
  setReposOnKeyUp, selectedUserRepo, openLinks, hideRepos, hideRepo, showAll, selectAllRepos,
} from '../actions';
import openSingleRepo from '../actions/openSingleRepo';
import UserRepos from '../Components/UserRepos';

const UserReposContainer = props => <UserRepos {...props} />;

const mapDispatchToProps = {
  filterOnKeyUp: setReposOnKeyUp,
  selectUserRepo: selectedUserRepo,
  openSelectedRepos: openLinks,
  hideSelectedRepos: hideRepos,
  showAllRepos: showAll,
  hideSingleRepo: hideRepo,
  openSingleRepo,
  selectAllRepos,
};

export default connect(null, mapDispatchToProps)(UserReposContainer);
