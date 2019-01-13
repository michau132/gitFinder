import React, { lazy, Suspense } from 'react';
import {
  HashRouter,
  Route,
  Switch,
} from 'react-router-dom';
import { configure } from 'mobx';
import { Provider } from 'mobx-react';
import { Paper } from '@material-ui/core';
import styled from 'styled-components';
import store from '../store';
import { WithLoadingStyles } from '../hoc/Loading';
import HeaderContainer from '../Containers/HeaderContainer';
import Header from './Header';
import EmptyUser from './EmptyUser';
import GlobalStyle from '../Layout/GlobalStyle';

export const NotFound = lazy(() => import('./NotFound'));
export const UserContainer = lazy(() => import('../Containers/UserContainer'));
const User = lazy(() => import('./User'));

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
  <Provider store={store}>
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
  </Provider>
);

export default App;
