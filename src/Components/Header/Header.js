import React from 'react';
import FormContainer from '../../Containers/FormContainer';
import Loop from '../Loop/Loop';
import styles from './Header.css';

const Header = () => (
  <header className={styles.header}>
    <FormContainer />
    <Loop />
  </header>
);

export default Header;
