import React from 'react';
import {
  Route,
  Switch,
} from 'react-router-dom';
import UserViewContainer from '../../Containers/UserViewContainer';
import styles from './App.css';
import Header from '../Header/Header';
import EmptyUser from '../EmptyUser';

const App = () => (
  <section className={styles.container}>
    <Header />
    <Switch>
      <Route exact path="/" component={EmptyUser} />
      <Route path="/:user" component={UserViewContainer} />
    </Switch>
  </section>
);

export default App;
