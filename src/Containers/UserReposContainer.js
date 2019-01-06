import { connect } from 'react-redux';
import {
  setReposOnKeyUp,
  selectUserRepo,
  openSelectedRepos,
  hideSelectedRepos,
  hideSingleRepo,
  showAllRepos,
  selectAllRepos,
} from '../actions';

const UserReposContainer = ({ render, ...restProps }) => render({ ...restProps });

const mapDispatchToProps = {
  setReposOnKeyUp,
  selectUserRepo,
  openSelectedRepos,
  hideSelectedRepos,
  showAllRepos,
  hideSingleRepo,
  selectAllRepos,
};

export { UserReposContainer };

export default connect(null, mapDispatchToProps)(UserReposContainer);
