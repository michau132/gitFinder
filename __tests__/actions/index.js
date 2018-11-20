import * as actions from '../../src/actions';
import * as types from '../../src/actions/types';

describe('actions', () => {
  test('should create an action to fetch user info', () => {
    const expectedAction = actions.createAction(types.GET_USER_REPOSITORIES);
    expect(actions.fetchUserInfo()).toEqual(expectedAction);
  });

  test('should create an action to get user', () => {
    const name = 'adam';
    const expectedAction = actions.createAction(types.GET_USER, { name });
    expect(actions.getUser(name)).toEqual(expectedAction);
  });

  test('should create an action to fetch user begin', () => {
    const expectedAction = actions.createAction(types.FETCH_USER_BEGIN);
    expect(actions.fetchUserBegin()).toEqual(expectedAction);
  });

  test('should create an action to fetch user info succes', () => {
    const userInfo = {};
    const expectedAction = actions.createAction(types.FETCH_USER_INFO_SUCCESS, { userInfo });
    expect(actions.fetchUserInfoSucces(userInfo)).toEqual(expectedAction);
  });

  test('should create an action to fetch user repos succes', () => {
    const repos = [];
    const expectedAction = actions.createAction(types.FETCH_USER_REPOS_SUCCESS, { repos });
    expect(actions.fetchUserReposSuccess(repos)).toEqual(expectedAction);
  });

  test('should create an action to fetch user repos error', () => {
    const message = 'error';
    const expectedAction = actions.createAction(types.FETCH_USER_ERROR, { message });
    expect(actions.fetchUserError(message)).toEqual(expectedAction);
  });

  test('should create an action to fetch user loading end', () => {
    const expectedAction = actions.createAction(types.FETCH_USER_LOADING_END);
    expect(actions.fetchUserLoadingEnd()).toEqual(expectedAction);
  });

  test('should create an action to set repos which match value from input', () => {
    const val = 'adam';
    const expectedAction = actions.createAction(types.FILTER_ON_KEY_UP, { val });
    expect(actions.setReposOnKeyUp(val)).toEqual(expectedAction);
  });

  test('should create an action to select user repo', () => {
    const id = 1;
    const expectedAction = actions.createAction(types.SELECT_USER_REPO, { id });
    expect(actions.selectUserRepo(id)).toEqual(expectedAction);
  });

  test('should create an action to open selected repos', () => {
    const expectedAction = actions.createAction(types.OPEN_SELECTED_REPOS);
    expect(actions.openSelectedRepos()).toEqual(expectedAction);
  });

  test('should create an action to hide selected repos', () => {
    const expectedAction = actions.createAction(types.HIDE_SELECTED_REPOS);
    expect(actions.hideSelectedRepos()).toEqual(expectedAction);
  });

  test('should create an action to show all repos', () => {
    const expectedAction = actions.createAction(types.SHOW_ALL_REPOS);
    expect(actions.showAllRepos()).toEqual(expectedAction);
  });

  test('should create an action to hide single repo', () => {
    const id = 1;
    const expectedAction = actions.createAction(types.HIDE_SINGLE_REPO, { id });
    expect(actions.hideSingleRepo(id)).toEqual(expectedAction);
  });

  test('should create an action to select all repos', () => {
    const expectedAction = actions.createAction(types.SELECT_ALL_REPOS);
    expect(actions.selectAllRepos()).toEqual(expectedAction);
  });
});
