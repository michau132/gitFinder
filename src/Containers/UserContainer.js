import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import UserView from '../Components/UserView';
import takeUserNameAndFetchData from '../actions/fetchData';
import LoaderHOC from '../hoc/LoaderHOC';

class UserContainer extends Component {
  static propTypes = {
    fetchData: PropTypes.func.isRequired,
    match: PropTypes.shape({
      params: PropTypes.shape({
        user: PropTypes.string.isRequired,
      }).isRequired,
    }).isRequired,
    user: PropTypes.shape({
      userInfo: PropTypes.shape({
        login: PropTypes.string.isRequired,
      }).isRequired,
    }).isRequired,
  }

  componentDidMount() {
    const { fetchData, match, user } = this.props;

    if (user.userInfo.login.length === 0) {
      fetchData(match.params.user);
    }
  }

  render() {
    return (
      <UserView {...this.props} />
    );
  }
}

const mapStateToProps = state => ({
  user: state,
});

const mapDispatchToProps = {
  fetchData: takeUserNameAndFetchData,
};

const UserContainerWithLoading = LoaderHOC(UserContainer);

export { UserContainer };

export default
withRouter(
  connect(mapStateToProps, mapDispatchToProps)(UserContainerWithLoading),
);
