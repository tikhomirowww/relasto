import React, { FC } from 'react';
import styles from '../Header/Header.module.scss';
import LogoIcon from '../../assets/icons/logo.svg';
import SearchIcon from '../../assets/icons/search-navbar.svg';
import ArrowIcon from '../../assets/icons/arrow-down.svg';

const Header: FC = () => {
  return (
    <div className={styles.header_main}>
      <button className={styles.logo_btn}>
        <LogoIcon />
      </button>
      <div className={styles.nav_center}>
        <ul>
          <li className="nav_item">
            Home &nbsp;
            <ArrowIcon />
          </li>
          <li className="nav_item">About</li>
          <li className="nav_item">
            Listing &nbsp;
            <ArrowIcon />
          </li>
          <li className="nav_item">
            Agents &nbsp;
            <ArrowIcon />
          </li>
          <li className="nav_item">Property</li>
          <li className="nav_item">Blog</li>
        </ul>
      </div>
      <div className={styles.nav_right}>
        <div className={styles.nav_search}>
          <SearchIcon />
        </div>
        <div className={styles.login_nav_btn}>Login</div>
      </div>
    </div>
  );
};

export default Header;
