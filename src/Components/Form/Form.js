import React from 'react';
import PropTypes from 'prop-types';
import {connect} from "react-redux";
import './Form.css';
class Form extends React.Component {
    static propTypes = {
        onAddUser: PropTypes.func,
        onUserRepo: PropTypes.func
    }
    searchUser = (event) => {
        event.preventDefault();
        if(this.input.value === '') {
            this.props.history.push('/');
            this.props.onAddUser('') ;
            this.props.onUserRepo([]);
        } else {
            fetch('https://api.github.com/users/' + this.input.value)
                .then( result => result.json())
                .then(that => {
                    this.props.onAddUser(that)
                })
                .catch(err => {
                    console.log('ERROR!' + err)
                });

            fetch('https://api.github.com/users/' + this.input.value + '/repos')
                .then( result => result.json())
                .then(that => {
                    that.sort((a, b) => {
                        if (a.pushed_at > b.pushed_at)
                            return -1;
                        if (a.pushed_at < b.pushed_at)
                            return 1;
                        return 0;
                    })
                    this.props.onUserRepo(that)
                })
                .catch(err => {
                    console.log('ERROR!' + err)
                })
            this.props.history.push('/user');
            this.input.value = '';
        }
    }
    render(){
        console.log('tera')
        return (
                <form onSubmit={event => this.searchUser(event)} className='container__header__form'>
                    <h1 className='container__header__form-title'>GitFinder</h1>
                    <input ref={inputRef => this.input = inputRef} type="text" className='container__header__form-input'/>
                    <button className='container__header__form-button'>Search</button>
                </form>
            )
    }
}
const mapStateToProps = (state) => {
    return state;
};
const mapDispatchToProps = (dispatch) => {
    return {
        onAddUser: (event) => dispatch({ type: 'ADD_USER', payload: event}),
        onUserRepo: (repo) => dispatch({ type: 'ADD_REPO', payload: repo })
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Form)