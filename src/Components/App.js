import React, { lazy, Suspense } from 'react';
import {
  HashRouter,
  Route,
  Switch,
} from 'react-router-dom';
import { configure } from 'mobx';
import { Paper } from '@material-ui/core';
import styled from 'styled-components';
import { WithLoadingStyles } from '../hoc/Loading';
import HeaderContainer from '../Containers/HeaderContainer';
import Header from './Header';
import EmptyUser from './EmptyUser';
import GlobalStyle from '../Layout/GlobalStyle';

const UserContainer = lazy(() => import('../Containers/UserContainer'));
const User = lazy(() => import('./User'));
const NotFound = lazy(() => import('./NotFound'));

configure({ enforceActions: 'observed' });

const PaperWithPadding = styled(Paper)`
  && {
    padding: 8px;
  }
`;

const PaperWithBackground = styled(PaperWithPadding)`
  && {
    background-color: #F5F5F5;
  }
`;

const App = () => (
  <HashRouter>
    <PaperWithBackground>
      <GlobalStyle />
      <PaperWithPadding>
        <HeaderContainer
          render={props => (
            <Header {...props} />
          )}
        />
        <Suspense fallback={<WithLoadingStyles />}>
          <Switch>
            <Route exact path="/" render={() => <EmptyUser />} />
            <Route
              exact
              path="/:user"
              render={routeProps => (
                <UserContainer
                  {...routeProps}
                  render={props => (
                    <User {...props} />
                  )}
                />
              )}
            />
            <Route render={() => <NotFound />} />
          </Switch>
        </Suspense>
      </PaperWithPadding>
    </PaperWithBackground>
  </HashRouter>

);

export default App;
