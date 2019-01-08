import * as types from '../../src/actions/types';
import reducer from '../../src/reducers/user';

describe('user reducer', () => {
  test('should return initial state', () => {
    expect(reducer(undefined, {})).toEqual({
      informations: {
        login: '',
        email: '',
        avatar_url: '',
        name: '',
      },
      repos: [],
      isLoading: false,
      error: null,
      isShowAllBtnDisabled: true,
      selectedReposAreEmpty: true,
      filterProjectsInput: '',
      allReposAreSelected: false,
    });
  });

  test('should return loading to true', () => {
    expect(reducer({ isLoading: false }, { type: types.FETCH_USER_BEGIN })).toEqual({
      isLoading: true,
      error: null,
    });
  });

  test('should return loading to true', () => {
    expect(reducer({ isLoading: false }, { type: types.FETCH_USER_BEGIN })).toEqual({
      isLoading: true,
      error: null,
    });
  });

  test('should return user information', () => {
    expect(
      reducer(
        { informations: {} },
        { type: types.FETCH_USER_INFO_SUCCESS, payload: { informations: { login: 'adam' } } },
      ),
    ).toEqual({ informations: { login: 'adam' }, error: null });
  });

  test('should return repos ', () => {
    expect(
      reducer(
        { repos: [] },
        {
          type: types.FETCH_USER_REPOS_SUCCESS,
          payload: {
            repos: [
              { pushed_at: '2015-01-01' },
              { pushed_at: '2018-10-10' },
              { pushed_at: '2018-02-01' },
            ],
          },
        },
      ),
    ).toEqual({
      repos: [
        { pushed_at: '2018-10-10' },
        { pushed_at: '2018-02-01' },
        { pushed_at: '2015-01-01' },
      ],
    });
  });

  test('should return loading to false', () => {
    expect(
      reducer({ isLoading: true }, { type: types.FETCH_USER_LOADING_END }),
    ).toEqual({ isLoading: false });
  });

  test('should return repos which have in name or description "dot"', () => {
    expect(
      reducer({
        repos: [
          { description: 'jakis opis', name: 'javascript for begginers' },
          { description: 'no description', name: 'dotnet' },
          { description: 'dota', name: 'asd' },
        ],
      }, { type: types.FILTER_ON_KEY_UP, payload: { val: 'dot' } }),
    ).toEqual(
      {
        repos: [
          { description: 'jakis opis', name: 'javascript for begginers', isFounded: false },
          { description: 'no description', name: 'dotnet', isFounded: true },
          { description: 'dota', name: 'asd', isFounded: true },
        ],
        filterProjectsInput: 'dot',
      },
    );
  });

  test('should return checked repo', () => {
    expect(
      reducer({
        repos: [
          { id: 1, isChecked: false },
          { id: 2, isChecked: false },
          { id: 3, isChecked: true },
        ],
      }, { type: types.SELECT_USER_REPO, payload: { id: 1 } }),
    ).toEqual(
      {
        repos: [
          { id: 1, isChecked: true },
          { id: 2, isChecked: false },
          { id: 3, isChecked: true },
        ],
        selectedReposAreEmpty: false,
        allReposAreSelected: false,
      },
    );
  });

  test('should return hidden selected repos', () => {
    expect(
      reducer({
        repos: [
          { id: 1, isChecked: true },
          { id: 2, isChecked: false },
          { id: 3, isChecked: true },
        ],
      }, { type: types.HIDE_SELECTED_REPOS }),
    ).toEqual(
      {
        repos: [
          { id: 1, isChecked: true, isHidden: true },
          { id: 2, isChecked: false, isHidden: false },
          { id: 3, isChecked: true, isHidden: true },
        ],
        isShowAllBtnDisabled: false,
        selectedReposAreEmpty: true,
        allReposAreSelected: false,
      },
    );
  });

  test('should return all repos that are hidden and reset isChecked, isFounded', () => {
    expect(
      reducer({
        repos: [
          {
            id: 1, isChecked: true, isHidden: true, isFounded: true,
          },
          {
            id: 2, isChecked: false, isHidden: true, isFounded: false,
          },
          {
            id: 3, isChecked: true, isHidden: false, isFounded: false,
          },
        ],
      }, { type: types.SHOW_ALL_REPOS }),
    ).toEqual(
      {
        repos: [
          {
            id: 1, isChecked: false, isHidden: false, isFounded: false,
          },
          {
            id: 2, isChecked: false, isHidden: false, isFounded: false,
          },
          {
            id: 3, isChecked: false, isHidden: false, isFounded: false,
          },
        ],
        isShowAllBtnDisabled: true,
        selectedReposAreEmpty: true,
        filterProjectsInput: '',
        allReposAreSelected: false,
      },
    );
  });

  test('should return one repo to be unChecked', () => {
    expect(
      reducer({
        repos: [
          { id: 1, isChecked: true },
          { id: 2 },
          { id: 3 },
        ],
        isShowAllBtnDisabled: true,
        selectedReposAreEmpty: true,
      }, { type: types.HIDE_SINGLE_REPO, payload: { id: 3 } }),
    ).toEqual(
      {
        repos: [
          { id: 1, isChecked: true },
          { id: 2 },
          { id: 3, isHidden: true, isChecked: false },
        ],
        isShowAllBtnDisabled: false,
        selectedReposAreEmpty: false,
      },
    );
  });

  test('should return all repos to be selected', () => {
    expect(
      reducer({
        repos: [
          { id: 1, isChecked: true },
          { id: 2 },
          { id: 3 },
        ],
        selectedReposAreEmpty: false,
      }, { type: types.SELECT_ALL_REPOS }),
    ).toEqual(
      {
        repos: [
          { id: 1, isChecked: true },
          { id: 2, isChecked: true },
          { id: 3, isChecked: true },
        ],
        selectedReposAreEmpty: false,
        allReposAreSelected: true,
      },
    );
  });
});
