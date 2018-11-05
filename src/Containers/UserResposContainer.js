import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { uploadFilterReposData } from '../actions';
import filterOnKeyUp from '../actions/filterOnKeyUp';
import selectUserRepo from '../actions/selectUserRepo';
import openSelectedRepos from '../actions/openSelectedRepos';
import hideSelectedRepos from '../actions/hideSelectedRepos';
import showAllRepos from '../actions/showAllRepos';
import hideSingleRepo from '../actions/hideSingleRepo';
import openSingleRepo from '../actions/openSingleRepo';
import UserRepos from '../Components/UserRepos';

class UserResposContainer extends Component {
  static propTypes = {
    uploadFilterReposData: PropTypes.func.isRequired,
    userRepos: PropTypes.array.isRequired,
  }
  
  componentDidMount() {
    const { uploadFilterReposData, userRepos } = this.props;
    uploadFilterReposData(userRepos);
  }
  
  render() {
    return (
      <UserRepos {...this.props} />
    );
  }
};

const mapStateToProps = state => ({
  userRepos: state.user.userRepos,
  filterRepos: state.filterRepos,
});

const mapDispatchToProps = dispatch => ({
  uploadFilterReposData: repos => dispatch(uploadFilterReposData(repos)),
  filterOnKeyUp: event => dispatch(filterOnKeyUp(event)),
  selectUserRepo: id => () => dispatch(selectUserRepo(id)),
  openSelectedRepos: e => dispatch(openSelectedRepos(e)),
  hideSelectedRepos: e => dispatch(hideSelectedRepos(e)),
  showAllRepos: e => dispatch(showAllRepos(e)),
  hideSingleRepo: id => () => dispatch(hideSingleRepo(id)),
  openSingleRepo: id => () => dispatch(openSingleRepo(id)),
});



export default connect(mapStateToProps, mapDispatchToProps)(UserResposContainer);