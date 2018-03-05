import React from 'react';
import {connect} from "react-redux";
import UserRepoList from './UserRepoList.jsx';

class UserInfo extends React.Component {
    render() {
        console.log(this.props)
        return (
            <section className='container__userInfo'>
                <h2 className='container__userInfo-name'>{this.props.user.name}</h2>
                <h3 className='container__userInfo-login'>{this.props.user.login}</h3>
                <p className='container__userInfo-email'>Email: {this.props.user.email}</p>
                <img src={this.props.user.avatar_url} alt="avatar" className='container__userInfo-avatar'/>
                <UserRepoList/>
            </section>
        )
    }
}

const mapStateToProps = (state) => {
    return state;
};

export default connect(mapStateToProps)(UserInfo);