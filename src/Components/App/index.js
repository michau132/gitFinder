import React from 'react';
import {
  HashRouter,
  Route,
  Switch,
} from 'react-router-dom';
import { Provider } from 'react-redux';
import UserContainer from '../../Containers/UserContainer';
import styles from './style.css';
import HeaderContainer from '../../Containers/HeaderContainer';
import EmptyUser from '../EmptyUser';
import store from '../../utils/store';


const App = () => (
  <Provider store={store}>
    <HashRouter>
      <section className={styles.container}>
        <HeaderContainer />
        <Switch>
          <Route exact path="/" component={EmptyUser} />
          <Route path="/:user" component={UserContainer} />
        </Switch>
      </section>
    </HashRouter>
  </Provider>

);

export default App;
