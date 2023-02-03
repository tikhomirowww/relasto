import React, { FC } from 'react';
import styles from './How.module.scss';
import Search from '../../assets/icons/Search.svg';
import Eye from '../../assets/icons/Eye.svg';
import Wallet from '../../assets/icons/Wallet.svg';
import Emoji from '../../assets/icons/Emoji.svg';

const How_it_works: FC = () => {
  return (
    <div className={styles.how_main}>
      <div className={styles.how_main_content}>
        <div className={styles.how_left}>
          <h1>
            Simple & easy way to <br /> find your dream <br /> Appointment
          </h1>
          <p>
            Lorem Ipsum is simply dummy text of the printing <br /> and typesetting industry.{' '}
          </p>
          <button>Get Started</button>
        </div>
        <div className={styles.how_right}>
          <div className={styles.how_right_item}>
            <Search />
            <h2>
              Search <br /> your location
            </h2>
          </div>
          <div className={styles.how_right_item}>
            <Eye />
            <h2>
              Visit <br /> Appointment
            </h2>
          </div>
          <div className={styles.how_right_item}>
            <Wallet />
            <h2>
              Get your <br /> dream house
            </h2>
          </div>
          <div className={styles.how_right_item}>
            <Emoji />
            <h2>
              Search your <br /> location
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default How_it_works;
