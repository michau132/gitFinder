import React from 'react';
import {
  HashRouter,
  Route,
  Switch,
} from 'react-router-dom';
import { configure } from 'mobx';
import { Paper, withStyles } from '@material-ui/core';
import styled, { createGlobalStyle } from 'styled-components';
import UserContainer from '../Containers/UserContainer';
import HeaderContainer from '../Containers/HeaderContainer';
import EmptyUser from './EmptyUser';
import Header from './Header';
import User from './User';
import NotFound from './NotFound';

configure({ enforceActions: 'observed' });

const styles = {
  paper: {
    backgroundColor: '#F5F5F5',
  },
};

const GlobalStyle = createGlobalStyle`
  html {
    box-sizing: border-box;
  }
  *, *:before, *:after {
    box-sizing: inherit;
  }
  body {
    background-color: #CCCCCC;
  }
  a {
    text-decoration: none;
  }
`;

const PaperWithPadding = styled(Paper)`
  padding: 8px;
`;

const App = ({ classes }) => (
  <HashRouter>
    <PaperWithPadding classes={{ root: classes.paper }}>
      <GlobalStyle />
      <PaperWithPadding>
        <HeaderContainer
          render={props => (
            <Header {...props} />
          )}
        />
        <Switch>
          <Route exact path="/" component={EmptyUser} />
          <Route
            exact
            path="/:user"
            render={() => (
              <UserContainer
                render={props => (
                  <User {...props} />
                )}
              />
            )}
          />
          <Route component={NotFound} />
        </Switch>
      </PaperWithPadding>
    </PaperWithPadding>
  </HashRouter>

);

export default withStyles(styles)(App);
