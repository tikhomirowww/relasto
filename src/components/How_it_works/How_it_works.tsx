import React, { FC } from 'react';
import styles from './How.module.scss';

const How_it_works: FC = () => {
  return (
    <div className={styles.how_main}>
      <div className={styles.how_content}>
        <div className={styles.how_left}>
          <h3>Simple & easy way to find your dream Appointment</h3>
          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p>
        </div>
        <div className={styles.how_right}>
          <div className={styles.how_right_item}></div>
          <div className={styles.how_right_item}></div>
          <div className={styles.how_right_item}></div>
          <div className={styles.how_right_item}></div>
        </div>
      </div>
    </div>
  );
};

export default How_it_works;
