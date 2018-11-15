import React, { Component } from 'react';
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

const mapDispatchToProps = {
  onValuePassedThroughParams: takeUserNameAndFetchData,
};

const UserContainerWithLoading = LoaderHOC(UserContainer);

export default
withRouter(
  connect(mapStateToProps, mapDispatchToProps)(UserContainerWithLoading),
);
