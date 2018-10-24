import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import UserView from '../Components/User/UserView';
import takeUserNameAndFetchData from '../actions/fetchData';

class UserViewContainer extends Component {
  componentDidMount() {
    const { onValuePassedThroughParams, match } = this.props;
    const { user } = match.params;
    onValuePassedThroughParams(user);
  }

  render() {
    const { user } = this.props;
    return (
      <UserView user={user} />
    );
  }
}

const mapStateToProps = state => ({
  user: state.user,
});

const mapDispatchToProps = dispatch => ({
  onValuePassedThroughParams: val => dispatch(takeUserNameAndFetchData(val)),
});

UserViewContainer.propTypes = {
  user: PropTypes.shape({
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
  }).isRequired,
  onValuePassedThroughParams: PropTypes.func.isRequired,
  match: PropTypes.shape({
    params: PropTypes.shape({
      user: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(UserViewContainer));
