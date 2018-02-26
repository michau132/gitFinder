import React from 'react';
import UserRepoListItem from './UserRepoListItem.jsx';
import {connect} from "react-redux";

class UserRepoList extends React.Component {
    render() {
        return (
                <ul className='container__userInfoRepoList'>
                    <h4>Repositiories:</h4>
                    {
                        this.props.userRepo.map((element, index) =>
                            <UserRepoListItem pro={element} key={index}/>
                        )
                    }
                </ul>
        )
    }
}

const mapStateToProps = (state) => {
    return state;
};

export default connect(mapStateToProps)(UserRepoList);