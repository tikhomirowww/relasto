import React from 'react';
import styles from './Highlights.module.scss';
import EllipseIcon from '../../assets/icons/Ellipse.svg';
import { list } from './consts';

const Hightlights = () => {
  return (
    <div className={styles.highlights_main}>
      <h2>Home Highlights</h2>
      <div className={styles.highlights_list}>
        {list.map((item) => (
          <div key={item.title} className={styles.highlights_item}>
            <span className={styles.highlights_item_first}>
              <EllipseIcon />
              <span>{item.title}</span>
            </span>
            <b>{item.value}</b>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Hightlights;
