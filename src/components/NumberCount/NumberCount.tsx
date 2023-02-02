import React, { FC } from 'react';
import styles from './NumberCount.module.scss';
import { INumberCountTypes } from './NumberCount.types';
import NumberCountIconsMoney from '../../assets/icons/iconMoney.svg'
import NumberCountIconsLocation from '../../assets/icons/iconLocation.svg'
import NumberCountIconsFire from '../../assets/icons/iconFire.svg'
import NumberCountIconsHappy from '../../assets/icons/iconHappy.svg'

const NumberCount: FC<INumberCountTypes> = () => {
  return (
    <div className={styles.numberCountBlock}>
      <div className={styles.containers}>
        <div className={styles.numberCountBlockItem}>
          <div className={styles.numberCountBoxes}>
            <div className={styles.iconsBox}>
              <NumberCountIconsMoney/>
            </div>
            <div className={styles.numberCountBoxItem}>
              <h2 className={styles.numberCount}>$15.4M</h2>
              <p className={styles.numberCountText}>Owned from <br/>Properties transactions</p>
            </div>
          </div>
          <div className={styles.numberCountBoxes}>
            <div className={styles.iconsBox}>
              <NumberCountIconsLocation/>
            </div>
            <div className={styles.numberCountBoxItem}>
              <h2 className={styles.numberCount}>25K+</h2>
              <p className={styles.numberCountText}>Properties for Buy <br/>& sell Successfully</p>
            </div>
          </div>
          <div className={styles.numberCountBoxes}>
            <div className={styles.iconsBox}>
              <NumberCountIconsFire/>
            </div>
            <div className={styles.numberCountBoxItem}>
              <h2 className={styles.numberCount}>500</h2>
              <p className={styles.numberCountText}>Daily completed transactions</p>
            </div>
          </div>
          <div className={styles.numberCountBoxes}>
            <div className={styles.iconsBox}>
              <NumberCountIconsHappy/>
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
