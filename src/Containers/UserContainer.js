import React, { Component, Fragment } from 'react';
import { observer } from 'mobx-react';
import { withRouter } from 'react-router';
import { toJS } from 'mobx';
import store from '../store';

@observer
class UserContainer extends Component {
  componentDidMount() {
    const { match } = this.props;
    store.getUserInfoAndRepos(match.params.user);
  }

  componentDidUpdate(prevProps) {
    const { match } = this.props;
    const previousUser = prevProps.match.params.user;
    const nextUser = match.params.user;
    if (previousUser !== nextUser) {
      store.getUserInfoAndRepos(match.params.user);
    }
  }

  handleFilterRepos = (e) => { store.filterRepos(e.target.value); }

  handleSelectUserRepo = (id) => { store.selectUserRepo(id); }

  handleShowAllRepos = () => { store.showAllRepos(); }

  handleHideSelectedRepos = () => { store.hideSelectedRepos(); }

  handleHideSingleRepo = (id) => { store.hideSingleRepo(id); }

  handleSelectAllRepos = () => { store.selectAllRepos(); }


  openSelectedRepos = () => {
    const openInNewTab = url => window.open(url, '_blank');
    store.repos.forEach(repo => repo.isChecked && openInNewTab(repo.html_url));
  }

  render() {
    const { render } = this.props;
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

export default withRouter(UserContainer);
