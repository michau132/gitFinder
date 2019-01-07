import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import takeUserNameAndFetchData from '../actions/fetchData';

class UserContainer extends Component {
  static propTypes = {
    fetchData: PropTypes.func.isRequired,
    match: PropTypes.shape({
      params: PropTypes.shape({
        user: PropTypes.string.isRequired,
      }).isRequired,
    }).isRequired,
    user: PropTypes.shape({
      informations: PropTypes.shape({
        login: PropTypes.string.isRequired,
      }).isRequired,
    }).isRequired,
  }

  componentDidMount() {
    const { fetchData, match, user } = this.props;
    if (user.informations.login.length === 0) {
      fetchData(match.params.user);
    }
  }

  componentDidUpdate(prevProps) {
    const { fetchData, match } = this.props;
    const previousUser = prevProps.match.params.user;
    const nextUser = match.params.user;
    if (previousUser !== nextUser) {
      fetchData(match.params.user);
    }
  }

  render() {
    const { render, ...restProps } = this.props;
    return (
      <Fragment>
        {
          render({ ...restProps })
        }
      </Fragment>
    );
  }
}

const mapStateToProps = state => ({
  user: state,
});

const mapDispatchToProps = {
  fetchData: takeUserNameAndFetchData,
};

export { UserContainer };

export default
withRouter(
  connect(mapStateToProps, mapDispatchToProps)(UserContainer),
);
