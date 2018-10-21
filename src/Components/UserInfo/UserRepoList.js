import React from 'react';
import { connect } from 'react-redux';
import UserRepoListItem from './UserRepoListItem';

class UserRepoList extends React.Component {
  render() {
    return (
      <ul className="container__userInfoRepoList">
        <h4>Repositiories:</h4>
        {
                        this.props.userRepo.map((element, index) => <UserRepoListItem pro={element} key={index} />)
                    }
      </ul>
    );
  }
}

const mapStateToProps = state => state;

export default connect(mapStateToProps)(UserRepoList);
