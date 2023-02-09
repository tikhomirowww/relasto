import React from 'react';
import { Outlet } from 'react-router-dom';

import Header from '../../src/components/Header';
import styles from './Layout.module.scss';
import { LayoutPros } from './Layout.types';

const Layout: React.FC<LayoutPros> = () => {
  return (
    <main className={styles.main}>
      <Header />
      <Outlet />
    </main>
  );
};

export default Layout;
