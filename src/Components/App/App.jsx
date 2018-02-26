import React from 'react';
import {connect} from "react-redux";
import Form from '../Form/Form.jsx';
import UserInfo from '../UserInfo/UserInfo.jsx';
import {Route} from 'react-router';
import './App.css';
class App extends React.Component {
    render() {
        if (this.props.user.length === 0){
            return (
                <header className='container__header'>
                    <Route path='/' component={Form} />
                    <div className='loop-box'>
                        <div className="loop"></div>
                    </div>
                </header>
            )
        } else {
            return (
                <section>
                    <header className='container__header'>
                        <Route path='/' component={Form} />
                        <div className='loop-box'>
                            <div className="loop"></div>
                        </div>
                    </header>
                    <Route path='/user' component={UserInfo}/>
                </section>
            )
        }
    }
}

const mapStateToProps = (state) => {
    return state;
};

export default connect(mapStateToProps)(App);


