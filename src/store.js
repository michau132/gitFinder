import {
  observable, action, runInAction,
} from 'mobx';
import axios from 'axios';
import key from '../key';


const apikey = process.env.NODE_ENV === 'production' ? '' : key;

export const sortByDate = (a, b) => {
  if (a.pushed_at > b.pushed_at) {
    return -1;
  }
  if (a.pushed_at < b.pushed_at) {
    return 1;
  }
  return 0;
};

const findMatchingRepos = value => repo => (
  (!repo.isHidden
    && (repo.name.includes(value) || (repo.description && repo.description.includes(value)))
    ? { ...repo, isFounded: true } : { ...repo, isFounded: false }
  )
);

class Store {
  @observable informations = {
    login: '',
    email: '',
    avatarUrl: '',
    name: '',
  }

  @observable repos = []

  @observable isLoading = false

  @observable error = null

  @observable isShowAllBtnDisabled = true

  @observable selectedReposAreEmpty = true

  @observable filterProjectsInput = ''

  @observable allReposAreSelected = false

  @observable foundedCount = 0

  fetchData = async (url) => {
    const result = await axios(url);
    return result.data;
  }

  @action getUserInfoAndRepos = (name) => {
    this.isLoading = true;
    const userInfoUrl = `https://api.github.com/users/${name}${apikey}`;
    const userRepoUrl = `https://api.github.com/users/${name}/repos${apikey}`;
    const response = Promise.all([
      this.fetchData(userInfoUrl),
      this.fetchData(userRepoUrl),
    ]);

    response
      .then(([info, repos]) => {
        repos.sort(sortByDate);
        runInAction(() => {
          this.informations = info;
          this.repos = repos;
          this.isLoading = false;
          this.error = null;
        });
      })
      .catch((err) => {
        runInAction(() => {
          this.error = err;
          this.isLoading = false;
        });
      });
  }

  @action filterRepos =(val) => {
    this.filterProjectsInput = val;
    if (!val) {
      this.repos = this.repos.map(repo => ({ ...repo, isFounded: false }));
      this.foundedCount = 0;
      this.isShowAllBtnDisabled = this.checkIsShowAllIsDisabled();
      return;
    }
    this.repos = this.repos.map(findMatchingRepos(val));
    this.foundedCount = this.countIsFounded();
  }

  @action selectUserRepo = (id) => {
    const { repos } = this;
    const getUserById = val => repo => repo.id === val;
    const foundIndex = repos.findIndex(getUserById(id));
    const currentRepo = repos[foundIndex];
    const prevRepos = repos.slice(0, foundIndex);
    const nextRepos = repos.slice(foundIndex + 1);

    if (currentRepo.isChecked) {
      this.repos = [...prevRepos, { ...currentRepo, isChecked: false }, ...nextRepos];
    } else {
      this.repos = [...prevRepos, { ...currentRepo, isChecked: true }, ...nextRepos];
    }
    this.selectedReposAreEmpty = this.isOneRepoSelected();
    this.allReposAreSelected = this.isEveryRepoIsSelected();
    this.isShowAllBtnDisabled = this.checkIsShowAllIsDisabled();
  }

  @action hideSelectedRepos = () => {
    this.repos = this.repos.map(repo => (
      (repo.isChecked === true || repo.isHidden === true)
        ? {
          ...repo, isHidden: true, isChecked: false, isFounded: false,
        } : { ...repo, isHidden: false }));

    this.isShowAllBtnDisabled = this.checkIsShowAllIsDisabled();
    this.selectedReposAreEmpty = this.isOneRepoSelected();
    this.allReposAreSelected = this.isEveryRepoIsSelected();
    this.foundedCount = this.countIsFounded();
  }

  @action showAllRepos = () => {
    this.repos = this.repos.map(repo => (
      {
        ...repo, isHidden: false, isChecked: false, isFounded: false,
      }
    ));
    this.selectedReposAreEmpty = this.isOneRepoSelected();
    this.filterProjectsInput = '';
    this.allReposAreSelected = this.isEveryRepoIsSelected();
    this.isShowAllBtnDisabled = this.checkIsShowAllIsDisabled();
    this.foundedCount = this.countIsFounded();
  }

  @action hideSingleRepo = (id) => {
    this.repos = this.repos.map(repo => (
      repo.id === id ? {
        ...repo, isHidden: true, isChecked: false, isFounded: false,
      } : repo
    ));
    this.selectedReposAreEmpty = this.isOneRepoSelected();
    this.isShowAllBtnDisabled = this.checkIsShowAllIsDisabled();
    this.foundedCount = this.countIsFounded();
  }

  @action selectAllRepos = () => {
    const { repos } = this;
    const areAllReposAreHidden = repos.every(repo => repo.isHidden === true);
    if (areAllReposAreHidden) {
      return;
    }
    if (this.isEveryRepoIsSelected()) {
      this.repos = repos.map(repo => ({ ...repo, isChecked: false }));
    } else {
      this.repos = repos.map(repo => ({ ...repo, isChecked: true }));
    }
    this.allReposAreSelected = this.isEveryRepoIsSelected();
    this.selectedReposAreEmpty = this.isOneRepoSelected();
    this.isShowAllBtnDisabled = this.checkIsShowAllIsDisabled();
  }

  isEveryRepoIsSelected = () => this.repos.every(repo => repo.isChecked === true)

  isOneRepoSelected = () => !this.repos.some(repo => repo.isChecked === true)

  checkIsShowAllIsDisabled = () => !this.repos.some(repo => (
    repo.isChecked === true || repo.isFounded === true || repo.isHidden === true
  ))

  countIsFounded = () => this.repos.filter(repo => !!repo.isFounded).length
}

export default new Store();
