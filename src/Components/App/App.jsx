import React from 'react';
import Form from '../Form/Form.jsx';
import UserInfo from '../UserInfo/UserInfo.jsx';
import {Route} from 'react-router';
import './App.css';
class App extends React.Component {
    render() {
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



export default App;


