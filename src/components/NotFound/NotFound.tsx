import React from 'react';

import NotFoundImg from '../../assets/icons/notFound.svg';
import RightArrow from '../../assets/icons/rightArrow.svg';
import Button from '../../ui/Button';
import Header from '../Header';
import styles from './NotFound.module.scss';

const NotFound = () => {
  return (
    <>
      <Header />
      <div className={styles.notFoundPage}>
        <div className={styles.notFoundBox}>
          <div className={styles.errorImg}>
            <NotFoundImg className={styles.notFound} />
          </div>
          <h2 className={styles.notFoundTitle}>Something wrong!</h2>
          <Button className={styles.notFoundBtn}>
            Homepage
            <RightArrow className={styles.rightArrow} />
          </Button>
        </div>
      </div>
    </>
  );
};

export default NotFound;
