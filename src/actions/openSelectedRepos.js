import {
  openLinks,
} from '.';

export default function openSelectedRepos(e) {
  return (dispatch, getState) => {
    const openInNewTab = url => window.open(url, '_blank');
    e.preventDefault();
    const { selectedUserRepos } = getState().filterRepos;
    selectedUserRepos.forEach(item => openInNewTab(item.html_url));
    dispatch(openLinks(selectedUserRepos));
  };
}
