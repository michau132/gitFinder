import { observable, toJS } from 'mobx';
import store, { sortByDate } from '../src/store';

describe('data should be sorted', () => {
  test('should be sorted', () => {
    const dataToSort = [
      { pushed_at: '2016-12-01' },
      { pushed_at: '2013-01-01' },
      { pushed_at: '2018-12-01' },
    ];
    dataToSort.sort(sortByDate);
    expect(dataToSort).toEqual([
      { pushed_at: '2018-12-01' },
      { pushed_at: '2016-12-01' },
      { pushed_at: '2013-01-01' },
    ]);
  });
});


describe('testing store', () => {
  beforeEach(() => {
    store.getUserInfoAndRepos('aOko123');
  });
  test('should import data from github api', () => {
    expect(store.repos).toEqual(observable([
      {
        id: 1,
        name: 'firstRepo',
        description: 'First repo description',
      },
      {
        id: 2,
        name: 'secondRepo',
        description: 'Second repo description',
      },
    ]));
    expect(store.informations).toEqual(observable({
      name: 'Adam Oko',
      login: 'aOko123',
      email: 'aoko123@gmail.com',
      loctation: 'Raszyn',
      avatar_url: 'https://via.placeholder.com/150',
    }));
    expect(store.isLoading).toBeFalsy();
    expect(store.error).toBeFalsy();
  });

  describe('testing filterRepos action', () => {
    test('when value lenght is greater than 0', () => {
      store.filterRepos('first');
      expect(store.repos).toEqual(observable([
        {
          id: 1,
          name: 'firstRepo',
          description: 'First repo description',
          isFounded: true,
        },
        {
          id: 2,
          name: 'secondRepo',
          description: 'Second repo description',
          isFounded: false,
        },
      ]));
      expect(store.foundedCount).toBe(1);
    });
    test('when value equals empty string', () => {
      store.filterRepos('');
      expect(store.repos).toEqual(observable([
        {
          id: 1,
          name: 'firstRepo',
          description: 'First repo description',
          isFounded: false,
        },
        {
          id: 2,
          name: 'secondRepo',
          description: 'Second repo description',
          isFounded: false,
        },
      ]));
      expect(store.foundedCount).toBe(0);
    });
  });

  describe('testing selectUserRepo action', () => {
    beforeEach(() => {
      store.selectUserRepo(1);
    });

    test('when passed id is equal 1', () => {
      expect(store.repos).toEqual(observable([
        {
          id: 1,
          name: 'firstRepo',
          description: 'First repo description',
          isChecked: true,
        },
        {
          id: 2,
          name: 'secondRepo',
          description: 'Second repo description',
        },
      ]));
      expect(store.selectedReposAreEmpty).toBeFalsy();
      expect(store.allReposAreSelected).toBeFalsy();
      expect(store.isShowAllBtnDisabled).toBeFalsy();
    });

    test('when again passed id is equal 1', () => {
      store.selectUserRepo(1);
      expect(store.repos).toEqual(observable([
        {
          id: 1,
          name: 'firstRepo',
          description: 'First repo description',
          isChecked: false,
        },
        {
          id: 2,
          name: 'secondRepo',
          description: 'Second repo description',
        },
      ]));
      expect(store.selectedReposAreEmpty).toBeTruthy();
      expect(store.allReposAreSelected).toBeFalsy();
      expect(store.isShowAllBtnDisabled).toBeTruthy();
    });
  });

  describe('testing action hideSelectedRepos', () => {
    test('when no repo is checked', () => {
      store.hideSelectedRepos();
      expect(store.repos).toEqual(observable([
        {
          id: 1,
          name: 'firstRepo',
          description: 'First repo description',
          isHidden: false,
        },
        {
          id: 2,
          name: 'secondRepo',
          description: 'Second repo description',
          isHidden: false,
        },
      ]));

      expect(store.selectedReposAreEmpty).toBeTruthy();
      expect(store.allReposAreSelected).toBeFalsy();
      expect(store.isShowAllBtnDisabled).toBeTruthy();
      expect(store.foundedCount).toBe(0);
    });
    test('when one repo isFounded and isChecked and after trigger showAll action', () => {
      store.selectUserRepo(1);
      store.filterRepos('repo');
      store.hideSelectedRepos();
      expect(store.repos).toEqual(observable([
        {
          id: 1,
          name: 'firstRepo',
          description: 'First repo description',
          isHidden: true,
          isFounded: false,
          isChecked: false,
        },
        {
          id: 2,
          name: 'secondRepo',
          description: 'Second repo description',
          isHidden: false,
          isFounded: true,
        },
      ]));
      expect(store.filterProjectsInput).toBe('repo');
      expect(store.selectedReposAreEmpty).toBeTruthy();
      expect(store.allReposAreSelected).toBeFalsy();
      expect(store.isShowAllBtnDisabled).toBeFalsy();
      expect(store.foundedCount).toBe(1);

      store.showAllRepos();
      expect(store.repos).toEqual(observable([
        {
          id: 1,
          name: 'firstRepo',
          description: 'First repo description',
          isHidden: false,
          isFounded: false,
          isChecked: false,
        },
        {
          id: 2,
          name: 'secondRepo',
          description: 'Second repo description',
          isHidden: false,
          isFounded: false,
          isChecked: false,
        },
      ]));

      expect(store.filterProjectsInput).toBe('');
      expect(store.selectedReposAreEmpty).toBeTruthy();
      expect(store.allReposAreSelected).toBeFalsy();
      expect(store.isShowAllBtnDisabled).toBeTruthy();
      expect(store.foundedCount).toBe(0);
    });
  });

  test('should call hideSingleRepo action and set attribute isHidden to true', () => {
    store.hideSingleRepo(2);
    expect(store.repos).toEqual(observable([
      {
        id: 1,
        name: 'firstRepo',
        description: 'First repo description',
      },
      {
        id: 2,
        name: 'secondRepo',
        description: 'Second repo description',
        isFounded: false,
        isChecked: false,
        isHidden: true,
      },
    ]));
    expect(store.selectedReposAreEmpty).toBeTruthy();
    expect(store.isShowAllBtnDisabled).toBeFalsy();
    expect(store.foundedCount).toBe(0);
  });

  describe('testing action selectAllRepos', () => {
    test('should not trigger an action', () => {
      const { repos } = toJS(store);
      repos.forEach(repo => store.hideSingleRepo(repo.id));
      const storeBeforeMethodCall = store.repos;
      store.selectAllRepos();
      expect(storeBeforeMethodCall).toBe(store.repos);
    });

    test('all repos are checked', () => {
      store.selectAllRepos();
      expect(store.repos).toEqual(observable([
        {
          id: 1,
          name: 'firstRepo',
          description: 'First repo description',
          isChecked: true,
        },
        {
          id: 2,
          name: 'secondRepo',
          description: 'Second repo description',
          isChecked: true,
        },
      ]));
      expect(store.selectedReposAreEmpty).toBeFalsy();
      expect(store.allReposAreSelected).toBeTruthy();
      expect(store.isShowAllBtnDisabled).toBeFalsy();
    });

    test('all repos are not checked', () => {
      const { repos } = toJS(store);
      repos.forEach(repo => store.selectUserRepo(repo.id));
      store.selectAllRepos();
      expect(store.repos).toEqual(observable([
        {
          id: 1,
          name: 'firstRepo',
          description: 'First repo description',
          isChecked: false,
        },
        {
          id: 2,
          name: 'secondRepo',
          description: 'Second repo description',
          isChecked: false,
        },
      ]));
      expect(store.selectedReposAreEmpty).toBeTruthy();
      expect(store.allReposAreSelected).toBeFalsy();
      expect(store.isShowAllBtnDisabled).toBeTruthy();
    });
  });
});
