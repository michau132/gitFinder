import React from 'react';

class UserRepoListItem extends React.Component {
  render() {
    return (
      <li className="container__userInfoRepoList__item">
        <b>
          <i>
Name repo:
            {this.props.pro.name}
          </i>
        </b>
        <br />
        <b>modified:</b>
        {' '}
        {this.props.pro.pushed_at}
      </li>
    );
  }
}

export default UserRepoListItem;
