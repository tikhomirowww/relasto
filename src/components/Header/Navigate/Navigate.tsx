import React from 'react';
import { FiChevronDown } from 'react-icons/fi';

import { navigate } from '../../../mocks/navigate';
import styles from './Navigate.module.scss';

const Navigate = () => {
  return (
    <ul className={styles.nav_main_list}>
      {navigate.map((navItem) => (
        <li key={navItem._id} className={styles.nav_main_item}>
          {navItem.select ? (
            <>
              <a className={styles.nav_main_link} href={navItem.path}>
                {navItem.name}
              </a>
              <FiChevronDown width={11} height={6} />
            </>
          ) : (
            <a className={styles.nav_main_link} href={navItem.path}>
              {navItem.name}
            </a>
          )}
        </li>
      ))}
    </ul>
  );
};

export default Navigate;
