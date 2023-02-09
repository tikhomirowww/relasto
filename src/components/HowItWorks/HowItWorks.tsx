import React, { FC } from 'react';

import EmojiIcon from '../../assets/icons/Emoji.svg';
import EyeIcon from '../../assets/icons/Eye.svg';
import SearchIcon from '../../assets/icons/Search.svg';
import WalletIcon from '../../assets/icons/Wallet.svg';
import Button from '../../ui/Button';
import styles from './HowItWorks.module.scss';

const HowItWorks: FC = () => {
  return (
    <section className={styles.section_howitworks} id="howitworks-section">
      <div className={styles.container}>
        <div className={styles.howitworks_block}>
          <div className={styles.howitworks_block_left}>
            <h2 className={styles.block_title}>Simple & easy way to find your dream Appointment</h2>
            <p className={styles.block_description}>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry.
            </p>
            <Button>Get Started</Button>
          </div>
          <div className={styles.howitworks_block_right}>
            <div>
              <SearchIcon />
              <h4>Search your location</h4>
            </div>
            <div>
              <EyeIcon />
              <h4>Visit Appointment</h4>
            </div>
            <div>
              <WalletIcon />
              <h4>Get your dream house</h4>
            </div>
            <div>
              <EmojiIcon />
              <h4>Enjoy your Appointment</h4>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
