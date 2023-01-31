import React, { FC } from 'react';
import styles from './NumberCount.module.scss';
import { INumberCountTypes } from './NumberCount.types';
import NumberCountIconsMoney from '../../assets/icons/Frame.svg'
import NumberCountIconsLocation from '../../assets/icons/Frame2.svg'
import NumberCountIconsFire from '../../assets/icons/GroupFrame3.svg'
import NumberCountIconsHappy from '../../assets/icons/icon - happy.svg'

const NumberCount: FC<INumberCountTypes> = ({count,text}) => {
  return (
    <div className={styles.numberCountBlock}>
      <div className={styles.containers}>
        <div className={styles.numberCountBlockItem}>
          <div className={styles.numberCountBoxes}>
            <div className={styles.iconsBox}>
              <NumberCountIconsMoney/>
            </div>
            <div className={styles.numberCountBoxItem}>
              <h2 className={styles.numberCount}>{count}$15.4M</h2>
              <p className={styles.numberCountText}>{text}Owned from <br/>Properties transactions</p>
            </div>
          </div>
          <div className={styles.numberCountBoxes}>
            <div className={styles.iconsBox}>
              <NumberCountIconsLocation/>
            </div>
            <div className={styles.numberCountBoxItem}>
              <h2 className={styles.numberCount}>{count}25K+</h2>
              <p className={styles.numberCountText}>{text}Properties for Buy <br/>& sell Successfully</p>
            </div>
          </div>
          <div className={styles.numberCountBoxes}>
            <div className={styles.iconsBox}>
              <NumberCountIconsFire/>
            </div>
            <div className={styles.numberCountBoxItem}>
              <h2 className={styles.numberCount}>{count = '500'}</h2>
              <p className={styles.numberCountText}>{text}Daily completed transactions</p>
            </div>
          </div>
          <div className={styles.numberCountBoxes}>
            <div className={styles.iconsBox}>
              <NumberCountIconsHappy/>
            </div>
            <div className={styles.numberCountBoxItem}>
              <h2 className={styles.numberCount}>{count ='600+'}</h2>
              <p className={styles.numberCountText}>{text}Regular Clients</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NumberCount;
