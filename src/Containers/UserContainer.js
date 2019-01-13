/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
import { Component } from 'react';
import { inject, observer } from 'mobx-react';

@inject('store')
@observer
class UserContainer extends Component {
  componentDidMount() {
    const { match } = this.props;
    this.props.store.getUserInfoAndRepos(match.params.user);
  }

  componentDidUpdate(prevProps) {
    const { match } = this.props;
    const previousUser = prevProps.match.params.user;
    const nextUser = match.params.user;
    if (previousUser !== nextUser) {
      this.props.store.getUserInfoAndRepos(match.params.user);
    }
  }

  render() {
    const { render, store: { error, isLoading } } = this.props;
    return (
      render({ error, isLoading })
    );
  }
}

export default UserContainer;
