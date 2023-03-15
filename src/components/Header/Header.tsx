import React, { FC, useState } from 'react';
import { IoMdSearch } from 'react-icons/io';

import LogoIcon from '../../assets/icons/logo.svg';
import Button from '../../ui/Button';
import Authorize from '../Authorize/Authorize';
import styles from '../Header/Header.module.scss';
import Navigate from './Navigate';

const Header: FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const onClose = () => {
    setIsOpen(false);
  };

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
            <Button onClick={() => setIsOpen(true)}>
              <a href="#">Log in</a>
            </Button>
            <Authorize isOpen={isOpen} onClose={onClose} />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
