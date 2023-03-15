import React from 'react';
import ArrowRightIcon from '../../assets/Icons/ArrowRight.svg';
import styles from './ExploreAll.module.scss';

const ExploreAll = () => {
  return (
    <div className={styles.exploreAll_btn}>
      <a href="#">
        Explore All <ArrowRightIcon />
      </a>
    </div>
  );
};

export default ExploreAll;
