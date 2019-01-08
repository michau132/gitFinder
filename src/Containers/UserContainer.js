/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */
import React, { Component, Fragment } from 'react';
import { observer, inject } from 'mobx-react';
import { withRouter } from 'react-router';
import { toJS } from 'mobx';

@inject('store')
@observer
class UserContainer extends Component {
  // static propTypes = {
  //   fetchData: PropTypes.func.isRequired,
  //   match: PropTypes.shape({
  //     params: PropTypes.shape({
  //       user: PropTypes.string.isRequired,
  //     }).isRequired,
  //   }).isRequired,
  //   user: PropTypes.shape({
  //     informations: PropTypes.shape({
  //       login: PropTypes.string.isRequired,
  //     }).isRequired,
  //   }).isRequired,
  // }

  componentDidMount() {
    const { store: { getUserInfoAndRepos }, match } = this.props;
    getUserInfoAndRepos(match.params.user);
  }

  componentDidUpdate(prevProps) {
    const { store: { getUserInfoAndRepos }, match } = this.props;
    const previousUser = prevProps.match.params.user;
    const nextUser = match.params.user;
    if (previousUser !== nextUser) {
      getUserInfoAndRepos(match.params.user);
    }
  }

  handleFilterRepos = (e) => { this.props.store.filterRepos(e.target.value); }

  handleSelectUserRepo = (id) => { this.props.store.selectUserRepo(id); }

  handleShowAllRepos = () => { this.props.store.showAllRepos(); }

  handleHideSelectedRepos = () => { this.props.store.hideSelectedRepos(); }

  handleHideSingleRepo = (id) => { this.props.store.hideSingleRepo(id); }

  handleSelectAllRepos = () => { this.props.store.selectAllRepos(); }


  openSelectedRepos = () => {
    const openInNewTab = url => window.open(url, '_blank');
    this.props.store.repos.forEach(repo => repo.isChecked && openInNewTab(repo.html_url));
  }

  render() {
    const { render, store } = this.props;
    const {
      handleFilterRepos,
      handleHideSelectedRepos,
      handleHideSingleRepo,
      handleSelectAllRepos,
      handleSelectUserRepo,
      handleShowAllRepos,
      openSelectedRepos,
    } = this;
    const { informations, repos, ...restStore } = toJS(store);
    return (
      <Fragment>
        {
          render({
            informations,
            repos,
            restStore,
            handleFilterRepos,
            handleHideSelectedRepos,
            handleHideSingleRepo,
            handleSelectAllRepos,
            handleSelectUserRepo,
            handleShowAllRepos,
            openSelectedRepos,
          })
        }
      </Fragment>
    );
  }
}

export { UserContainer };

export default withRouter(UserContainer);
