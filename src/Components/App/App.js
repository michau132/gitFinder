import React from 'react';
import {
  Route,
  Switch,
} from 'react-router-dom';
import UserContainer from '../../Containers/UserContainer';
import styles from './style.css';
import HeaderContainer from '../../Containers/HeaderContainer';
import EmptyUser from '../EmptyUser';

const App = () => (
  <section className={styles.container}>
    <HeaderContainer />
    <Switch>
      <Route exact path="/" component={EmptyUser} />
      <Route path="/:user" component={UserContainer} />
    </Switch>
  </section>
);

export default App;
