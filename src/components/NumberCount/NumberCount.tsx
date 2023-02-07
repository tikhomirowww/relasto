import React, { FC } from 'react';

import FireIcon from '../../assets/icons/fire.svg';
import HappyIcon from '../../assets/icons/happy.svg';
import LocationIcon from '../../assets/icons/location.svg';
import MoneyIcon from '../../assets/icons/money.svg';
import styles from './NumberCount.module.scss';

const NumberCount: FC = () => {
  return (
    <div className={styles.numberCountBlock}>
      <div className={styles.containers}>
        <div className={styles.numberCountBlockItem}>
          <div className={styles.numberCountBoxes}>
            <div className={styles.iconsBox}>
              <MoneyIcon />
            </div>
            <div className={styles.numberCountBoxItem}>
              <h2 className={styles.numberCount}>$15.4M</h2>
              <p className={styles.numberCountText}>
                Owned from <br />
                Properties transactions
              </p>
            </div>
          </div>
          <div className={styles.numberCountBoxes}>
            <div className={styles.iconsBox}>
              <LocationIcon />
            </div>
            <div className={styles.numberCountBoxItem}>
              <h2 className={styles.numberCount}>25K+</h2>
              <p className={styles.numberCountText}>
                Properties for Buy <br />& sell Successfully
              </p>
            </div>
          </div>
          <div className={styles.numberCountBoxes}>
            <div className={styles.iconsBox}>
              <FireIcon />
            </div>
            <div className={styles.numberCountBoxItem}>
              <h2 className={styles.numberCount}>500</h2>
              <p className={styles.numberCountText}>Daily completed transactions</p>
            </div>
          </div>
          <div className={styles.numberCountBoxes}>
            <div className={styles.iconsBox}>
              <HappyIcon />
            </div>
            <div className={styles.numberCountBoxItem}>
              <h2 className={styles.numberCount}>600+</h2>
              <p className={styles.numberCountText}>Regular Clients</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NumberCount;
