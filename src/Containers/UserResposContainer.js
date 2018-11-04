import React, { Component } from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';
import UserRepos from '../Components/UserRepos';

class UserResposContainer extends Component {
  static propTypes = {
    userRepos: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
        forks_count: PropTypes.number,
        stargazers_count: PropTypes.number,
        description: PropTypes.string,
        html_url: PropTypes.string.isRequired,
      }),
    ).isRequired,
  }
  
  constructor(props, context) {
    super(props, context);
    this.state = {
      userReposFiltered: [],
      selectedUserRepos: [],
      allReposAreShown: true,
      selectedReposAreEmpty: true,
    }
  }
  
  componentDidMount() {
    this.setState({
      userReposFiltered: this.props.userRepos,
    })
  }
  
  filterOnKeyUp = (event) => {
    const findMatchingRepos = value => repo =>  repo.name.match(value) || repo.description && repo.description.match(value);
    const userReposFiltered = this.props.userRepos.filter(findMatchingRepos(event.target.value));
    const allReposAreShown = _.isEqual(userReposFiltered, this.props.userRepos)

    this.setState({
      userReposFiltered,
      allReposAreShown,
    })
  }
  
  selectUserRepo = (id) => () => {
    const { userReposFiltered, selectedUserRepos } = this.state;
    let checkedRepos, actualRepos;
    const getUserById = id => repo => repo.id === id;
    const foundIndex = userReposFiltered.findIndex(getUserById(id));
    const currentRepo = userReposFiltered[foundIndex];
    const prevRepos = userReposFiltered.slice(0, foundIndex);
    const nextRepos = userReposFiltered.slice(foundIndex + 1);
    
    if (selectedUserRepos.some(getUserById(id))) {
      checkedRepos = selectedUserRepos.filter(item => item.id !== id);
      actualRepos = [...prevRepos, {...currentRepo, isChecked: false}, ...nextRepos];
    } else {
      checkedRepos = [...selectedUserRepos, currentRepo];
      actualRepos = [...prevRepos, {...currentRepo, isChecked: true}, ...nextRepos];
    }
    
    this.setState({
      selectedUserRepos: checkedRepos,
      userReposFiltered: actualRepos,
      selectedReposAreEmpty: false,
    })
  }
  
  openSelectedRepos = (e) => {
    const openInNewTab = (url) => window.open(url, `_blank`);
    e.preventDefault();
    const { selectedUserRepos } = this.state;
    selectedUserRepos.forEach(item=> openInNewTab(item.html_url))
    if (selectedUserRepos.length > 0) {
      this.setState({
        userReposFiltered: selectedUserRepos,
        allReposAreShown: false,
        selectedUserRepos: [],
        selectedReposAreEmpty: true,
      })
    }
  }
  
  hideSelectedRepos = (e) => {
    e.preventDefault();
    const { selectedUserRepos, userReposFiltered } = this.state;
    
    //comparing two arrays and hiding selected repositories
    const shownRepos = userReposFiltered.filter(item => !selectedUserRepos.find(o => item.id === o.id));
    if (selectedUserRepos.length > 0) {
      this.setState({
        userReposFiltered: shownRepos,
        allReposAreShown: false,
        selectedUserRepos: [],
        selectedReposAreEmpty: true,
      })
    }
  }
  
  showAllRepos = (e) => {
    e.preventDefault();
    this.setState({
      userReposFiltered: this.props.userRepos,
      allReposAreShown: true,
      selectedReposAreEmpty: true,
    })
  }
  
  hideSingleRepo = (id) => () => {
    const { userReposFiltered } = this.state;
    const actualRepos = userReposFiltered.filter(item => item.id !== id);
    this.setState({
      userReposFiltered: actualRepos,
      allReposAreShown: false,
    })
  }
  
  openSingleRepo = (url) => () => {
    window.open(url, `_blank`);
  }
  
  render() {
    const { userReposFiltered } = this.state;
    return (
      <UserRepos
        userRepos={userReposFiltered}
        filterOnKeyUp={this.filterOnKeyUp}
        selectUserRepo={this.selectUserRepo}
        showAllRepos={this.showAllRepos}
        allReposAreShown={this.state.allReposAreShown}
        openSelectedRepos={this.openSelectedRepos}
        hideSelectedRepos={this.hideSelectedRepos}
        hideSingleRepo={this.hideSingleRepo}
        selectedReposAreEmpty={this.state.selectedReposAreEmpty}
        openSingleRepo={this.openSingleRepo}
      />
    );
  }
};



export default UserResposContainer;