import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import * as types from '../../src/actions/types';
import takeUserNameAndFetchData from '../../src/actions/fetchData';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('testing fetchData actions', () => {
  test('should pass user name and fetch data', () => {
    const expectedActions = [
      { type: types.FETCH_USER_BEGIN, payload: {} },
      { type: types.FETCH_USER_INFO_SUCCESS, payload: { userInfo: { login: 'a', email: 'ab@c.com' } } },
      { type: types.FETCH_USER_REPOS_SUCCESS, payload: { repos: [{ id: 1, name: 'repo1' }, { id: 2, name: 'repo2' }] } },
      { type: types.FETCH_USER_LOADING_END, payload: {} },
    ];
    const store = mockStore();
    return store.dispatch(takeUserNameAndFetchData())
      .then(() => {
        const actualActions = store.getActions().map(action => action);
        expect(actualActions).toEqual(expectedActions);
      });
  });
});
