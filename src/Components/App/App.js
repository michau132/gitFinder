import React from 'react';
import { Route } from 'react-router';
import Form from '../Form/Form';
import UserInfo from '../UserInfo/UserInfo';
import './App.css';

class App extends React.Component {
  render() {
    console.log('jeste')
    return (
      <section>
        <header className="container__header">
          <Route path="/" component={Form} />
          <div className="loop-box">
            <div className="loop" />
          </div>
        </header>
        <Route path="/user/:id" component={UserInfo} />
      </section>
    );
  }
}


export default App;
