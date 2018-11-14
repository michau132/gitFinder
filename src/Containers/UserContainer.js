import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import UserView from '../Components/UserView';
import takeUserNameAndFetchData from '../actions/fetchData';
import LoaderHOC from '../hoc/LoaderHOC';

class UserContainer extends Component {
  componentDidMount() {
    const { onValuePassedThroughParams, match, user } = this.props;

    if (user.userInfo.login.length === 0) {
      onValuePassedThroughParams(match.params.user);
    }
  }

  render() {
    return (
      <UserView {...this.props} />
    );
  }
}

const mapStateToProps = state => ({
  user: state.user,
});

const mapDispatchToProps = dispatch => ({
  onValuePassedThroughParams: val => dispatch(takeUserNameAndFetchData(val)),
});

const UserContainerWithLoading = LoaderHOC(UserContainer);

UserContainer.propTypes = {
  userInfo: PropTypes.shape({
    login: PropTypes.string.isRequired,
    email: PropTypes.string,
    avatar_url: PropTypes.string,
    name: PropTypes.string,
  }).isRequired,
  userRepos: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      pushed_at: PropTypes.string.isRequired,
    }),
  ).isRequired,
  onValuePassedThroughParams: PropTypes.func.isRequired,
  match: PropTypes.shape({
    params: PropTypes.shape({
      user: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
};

export default
withRouter(
  connect(mapStateToProps, mapDispatchToProps)(UserContainerWithLoading),
);
