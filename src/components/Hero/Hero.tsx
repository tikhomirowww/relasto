import React, { FC } from 'react';
import styles from './Hero.module.scss';
import Home from '../../assets/icons/Home.svg';
import Glass from '../../assets/icons/Glass.svg';

const Hero: FC = () => {
  return (
    <>
      <div className={styles.hero_main}>
        <div className={styles.hero_left}>
          <h2>
            Find a perfect property <br /> Where you'll love to live
          </h2>
          <p>
            We helps businesses customize, automate and scale up <br /> their ad production and
            delivery.
          </p>
          <div className={styles.hero_btns_block}>
            <button className={styles.hero_btn}>Buy</button>
            <button className={styles.hero_btn}>Sell</button>
            <button className={styles.hero_btn}>Rent</button>
          </div>
          <div className={styles.hero_info_block}>
            <div className={styles.hero_info_item}>
              <div className={styles.info_mini_desc}>City/Street</div>
              <div className={styles.info_bold_desc}>New York City</div>
            </div>
            <div className={styles.hero_info_item}>
              <div className={styles.info_mini_desc}>Property Type</div>
              <div className={styles.info_bold_desc}>Duplex House</div>
            </div>
            <div className={styles.hero_info_item}>
              <div className={styles.info_mini_desc}>Property Type</div>
              <div className={styles.info_bold_desc}>$15000 - $350000</div>
            </div>
            <div className={styles.hero_info_item}>
              <div className={styles.hero_info_search}>
                <Glass />
              </div>
            </div>
          </div>
        </div>
        <div className={styles.hero_right}>
          <Home />
        </div>
      </div>
    </>
  );
};

export default Hero;
