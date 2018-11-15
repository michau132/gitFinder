import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {
  uploadFilterReposData, setReposOnKeyUp, selectedUserRepo, openLinks, hideRepos, hideRepo, showAll,
} from '../actions';
import openSingleRepo from '../actions/openSingleRepo';
import UserRepos from '../Components/UserRepos';

class UserResposContainer extends Component {
  static propTypes = {
    uploadFilterReposData: PropTypes.func.isRequired,
    userRepos: PropTypes.arrayOf(PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      forks_count: PropTypes.number,
      stargazers_count: PropTypes.number,
      description: PropTypes.string,
      html_url: PropTypes.string.isRequired,
    })).isRequired,
  }

  componentDidMount() {
    // eslint-disable-next-line no-shadow
    const { uploadFilterReposData, userRepos } = this.props;
    uploadFilterReposData(userRepos);
  }

  render() {
    return (
      <UserRepos {...this.props} />
    );
  }
}

const mapStateToProps = state => ({
  user: state.user,
});

const mapDispatchToProps = dispatch => ({
  uploadFilterReposData: repos => dispatch(uploadFilterReposData(repos)),
  filterOnKeyUp: event => dispatch(setReposOnKeyUp(event.target.value)),
  selectUserRepo: id => () => dispatch(selectedUserRepo(id)),
  openSelectedRepos: e => dispatch(openLinks(e)),
  hideSelectedRepos: () => dispatch(hideRepos()),
  showAllRepos: e => dispatch(showAll(e)),
  hideSingleRepo: id => () => dispatch(hideRepo(id)),
  openSingleRepo: id => () => dispatch(openSingleRepo(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(UserResposContainer);
