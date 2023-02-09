import React, { FC } from 'react';

import FireIcon from '../../assets/icons/fire.svg';
import HappyIcon from '../../assets/icons/happy.svg';
import LocationIcon from '../../assets/icons/location.svg';
import MoneyIcon from '../../assets/icons/money.svg';
import styles from './OurAchievements.module.scss';

const OurAchievement: FC = () => {
  return (
    <section className={styles.section_ourachievement} id="">
      <div className={styles.container}>
        <div className={styles.ourachievement_block}>
          <div className={styles.ourachievement_block_item}>
            <div className={styles.ourachievement_block_icon}>
              <MoneyIcon />
            </div>
            <span>$15.4M</span>
            <p>Owned from Properties transactions</p>
          </div>
          <div className={styles.ourachievement_block_item}>
            <div className={styles.ourachievement_block_icon}>
              <LocationIcon />
            </div>
            <span>25K+</span>
            <p>Properties for Buy & sell Successfully</p>
          </div>
          <div className={styles.ourachievement_block_item}>
            <div className={styles.ourachievement_block_icon}>
              <FireIcon />
            </div>
            <span>500</span>
            <p>Daily completed transactions</p>
          </div>
          <div className={styles.ourachievement_block_item}>
            <div className={styles.ourachievement_block_icon}>
              <HappyIcon />
            </div>
            <span>600+</span>
            <p>Reagular Clients</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurAchievement;
