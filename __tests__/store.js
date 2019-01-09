import { when, observable } from 'mobx';
import store from '../src/store';

describe('testing store', () => {
  test('should import data from github api', () => {
    store.getUserInfoAndRepos('aOko123');

    when(
      () => store.beer.name > 0,
      () => {
        expect(store.repos).toEqual(observable([
          {
            id: 1,
            name: 'firstRepo',
            forks_count: 0,
            stargazers_count: 0,
            description: 'First repo description',
            html_url: 'https://github.com/aOko123/firstRepo',
          },
          {
            id: 2,
            name: 'secondRepo',
            forks_count: 0,
            stargazers_count: 0,
            description: 'Second repo description',
            html_url: 'https://github.com/aOko123/secondRepo',
          },
        ]));
        expect(store.informations).toEqual(observable({
          name: 'Adam Oko',
          login: 'aOko123',
          email: 'aoko123@gmail.com',
          loctation: 'Raszyn',
          avatar_url: 'https://via.placeholder.com/150',
        }));
      },
    );
  });

  test('should call filterRepos fn and set attribute isFounded,', () => {
    store.filterRepos('first');
    expect(store.repos).toEqual(observable([
      {
        id: 1,
        name: 'firstRepo',
        forks_count: 0,
        stargazers_count: 0,
        description: 'First repo description',
        html_url: 'https://github.com/aOko123/firstRepo',
        isFounded: true,
      },
      {
        id: 2,
        name: 'secondRepo',
        forks_count: 0,
        stargazers_count: 0,
        description: 'Second repo description',
        html_url: 'https://github.com/aOko123/secondRepo',
        isFounded: false,
      },
    ]));
  });

  test('should call selectUserRepo and to given repo set attribute isChecked to true', () => {
    store.selectUserRepo(1);
    expect(store.repos).toEqual(observable([
      {
        id: 1,
        name: 'firstRepo',
        forks_count: 0,
        stargazers_count: 0,
        description: 'First repo description',
        html_url: 'https://github.com/aOko123/firstRepo',
        isFounded: true,
        isChecked: true,
      },
      {
        id: 2,
        name: 'secondRepo',
        forks_count: 0,
        stargazers_count: 0,
        description: 'Second repo description',
        html_url: 'https://github.com/aOko123/secondRepo',
        isFounded: false,
      },
    ]));
  });

  test('should call hideSelectedRepos and set isHidden attribute to isChecked = true attribute', () => {
    store.hideSelectedRepos();
    expect(store.repos).toEqual(observable([
      {
        id: 1,
        name: 'firstRepo',
        forks_count: 0,
        stargazers_count: 0,
        description: 'First repo description',
        html_url: 'https://github.com/aOko123/firstRepo',
        isFounded: true,
        isChecked: false,
        isHidden: true,
      },
      {
        id: 2,
        name: 'secondRepo',
        forks_count: 0,
        stargazers_count: 0,
        description: 'Second repo description',
        html_url: 'https://github.com/aOko123/secondRepo',
        isFounded: false,
        isHidden: false,
      },
    ]));
  });

  test('should call showAllRepos and reset all attributes', () => {
    store.showAllRepos();
    expect(store.repos).toEqual(observable([
      {
        id: 1,
        name: 'firstRepo',
        forks_count: 0,
        stargazers_count: 0,
        description: 'First repo description',
        html_url: 'https://github.com/aOko123/firstRepo',
        isFounded: false,
        isChecked: false,
        isHidden: false,
      },
      {
        id: 2,
        name: 'secondRepo',
        forks_count: 0,
        stargazers_count: 0,
        description: 'Second repo description',
        html_url: 'https://github.com/aOko123/secondRepo',
        isFounded: false,
        isChecked: false,
        isHidden: false,
      },
    ]));
  });

  test('should call hideSingleRepo and set attribute isHidden to true', () => {
    store.hideSingleRepo(2);
    expect(store.repos).toEqual(observable([
      {
        id: 1,
        name: 'firstRepo',
        forks_count: 0,
        stargazers_count: 0,
        description: 'First repo description',
        html_url: 'https://github.com/aOko123/firstRepo',
        isFounded: false,
        isChecked: false,
        isHidden: false,
      },
      {
        id: 2,
        name: 'secondRepo',
        forks_count: 0,
        stargazers_count: 0,
        description: 'Second repo description',
        html_url: 'https://github.com/aOko123/secondRepo',
        isFounded: false,
        isChecked: false,
        isHidden: true,
      },
    ]));
  });

  test('should call hideSingleRepo and set attribute isChecked to true', () => {
    store.hideSingleRepo(2);
    expect(store.repos).toEqual(observable([
      {
        id: 1,
        name: 'firstRepo',
        forks_count: 0,
        stargazers_count: 0,
        description: 'First repo description',
        html_url: 'https://github.com/aOko123/firstRepo',
        isFounded: false,
        isChecked: false,
        isHidden: false,
      },
      {
        id: 2,
        name: 'secondRepo',
        forks_count: 0,
        stargazers_count: 0,
        description: 'Second repo description',
        html_url: 'https://github.com/aOko123/secondRepo',
        isFounded: false,
        isChecked: false,
        isHidden: true,
      },
    ]));
  });

  test('should call selectAllRepos and set attribute to all items isChecked to true', () => {
    store.selectAllRepos();
    expect(store.repos).toEqual(observable([
      {
        id: 1,
        name: 'firstRepo',
        forks_count: 0,
        stargazers_count: 0,
        description: 'First repo description',
        html_url: 'https://github.com/aOko123/firstRepo',
        isFounded: false,
        isChecked: true,
        isHidden: false,
      },
      {
        id: 2,
        name: 'secondRepo',
        forks_count: 0,
        stargazers_count: 0,
        description: 'Second repo description',
        html_url: 'https://github.com/aOko123/secondRepo',
        isFounded: false,
        isChecked: true,
        isHidden: true,
      },
    ]));
  });
});


// test('should call getSimilarBeers', () => {
//   const spy = jest.spyOn(ModalStore, 'getSimilarBeers');
//   ModalStore.showBeerDetails({
//     id: 1,
//     image_url: 'https://via.placeholder.com/150',
//     name: 'Beer',
//     tagline: 'Drink or die',
//     ibu: 15,
//     abv: 12,
//     ebc: 8,
//     food_pairing: [
//       'meat', 'vegetables',
//     ],
//   });

//   expect(spy).toHaveBeenCalledWith(8);
// });
