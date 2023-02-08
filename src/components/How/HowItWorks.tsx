import React, { FC } from 'react';

import EmojiIcon from '../../assets/icons/Emoji.svg';
import EyeIcon from '../../assets/icons/Eye.svg';
import SearchIcon from '../../assets/icons/Search.svg';
import WalletIcon from '../../assets/icons/Wallet.svg';
import styles from './HowItWorks.module.scss';

const HowItWorks: FC = () => {
  return (
    <div className={styles.how_main}>
      <div className={styles.how_main_content}>
        <div className={styles.how_left}>
          <h1>
            Simple & easy way to <br /> find your dream <br /> Appointment
          </h1>
          <p>
            Lorem Ipsum is simply dummy text of the printing <br /> and typesetting industry.
          </p>
          <button>Get Started</button>
        </div>
        <div className={styles.how_right}>
          <div className={styles.how_right_item}>
            <SearchIcon />
            <h2>
              Search <br /> your location
            </h2>
          </div>
          <div className={styles.how_right_item}>
            <EyeIcon />
            <h2>
              Visit <br /> Appointment
            </h2>
          </div>
          <div className={styles.how_right_item}>
            <WalletIcon />
            <h2>
              Get your <br /> dream house
            </h2>
          </div>
          <div className={styles.how_right_item}>
            <EmojiIcon />
            <h2>
              Search your <br /> location
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;
