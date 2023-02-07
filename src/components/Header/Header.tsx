import React, { FC } from 'react';
import { Link } from 'react-router-dom';
import Button from '../../ui/Button';
import styles from '../Header/Header.module.scss';
import LogoIcon from '../../assets/icons/logo.svg';
import SearchIcon from '../../assets/icons/search-navbar.svg';
import ArrowIcon from '../../assets/icons/arrow-down.svg';

const Header: FC = () => {
  return (
    <div className={styles.header_main}>
      <Link to="/" className={styles.logo_btn}>
        <LogoIcon />
      </Link>
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
        <Button>Login</Button>
      </div>
    </div>
  );
};

export default Header;
