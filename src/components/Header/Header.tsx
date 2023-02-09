import React, { FC } from 'react';
import { IoMdSearch } from 'react-icons/io';

// import { Link } from 'react-router-dom';
import LogoIcon from '../../assets/icons/logo.svg';
import Button from '../../ui/Button';
import styles from '../Header/Header.module.scss';
import Navigate from './Navigate';

const Header: FC = () => {
  return (
    <header className={styles.section_header} id="header">
      <div className={styles.container}>
        <div className={styles.header_section}>
          <div className={styles.header_logo}>
            <a href="/">
              <LogoIcon />
            </a>
          </div>
          <nav className={styles.nav}>
            <Navigate />
          </nav>
          <div className={styles.header_right_container}>
            <a href="/search">
              <IoMdSearch width={17} height={17} />
              Search
            </a>
            <Button>
              <a href="/sign-in">Log in</a>
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
