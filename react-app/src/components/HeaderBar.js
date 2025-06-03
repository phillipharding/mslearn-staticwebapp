import React from 'react';
import HeaderBarBrand from './HeaderBarBrand';
import styles from './HeaderBar.module.scss';

const HeaderBar = () => (
  <header className={styles.navbarwrapper}>
    <nav
      className="navbar"
      role="navigation"
      aria-label="main navigation"
    >
      <HeaderBarBrand />
    </nav>
  </header>
);

export default HeaderBar;
