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
import store from '../../store';
import Header from '../Header';
import UserView from '../UserView';


const App = () => (
  <Provider store={store}>
    <HashRouter>
      <section className={styles.container}>
        <HeaderContainer render={props => <Header {...props} />} />
        <Switch>
          <Route exact path="/" component={EmptyUser} />
          <Route path="/:user" component={() => <UserContainer render={props => <UserView {...props} />} />} />
        </Switch>
      </section>
    </HashRouter>
  </Provider>

);

export default App;
