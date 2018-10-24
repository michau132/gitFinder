import React from 'react';
import FormViewContainer from '../../Containers/FormViewContainer';
import Loop from '../Loop/Loop';
import styles from './Header.css';

const Header = () => (
  <header className={styles.header}>
    <FormViewContainer />
    <Loop />
  </header>
);

export default Header;
