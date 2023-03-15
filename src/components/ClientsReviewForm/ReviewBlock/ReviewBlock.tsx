import React from 'react';

import Rating from '../../../ui/Rating';
import styles from './ReviewBlock.module.scss';

const ReviewBlock = () => {
  return (
    <article className={styles.reviewBlock}>
      <h3>
        Eget eu massa et consectetur. Mauris donec. Leo a, id sed duis proin sodales. Turpis viverra
        diam porttitor mattis morbi ac amet. Euismod commodo. We get you customer relationships that
        last.
      </h3>
      <div className={styles.reviewBlockRating}>
        <Rating rating={4.5} />
        <time dateTime="2022-06-02">02 June 2022</time>
      </div>
      <div className={styles.reviewBlockAvatar}>
        <img
          src="https://images.unsplash.com/photo-1552058544-f2b08422138a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=999&q=80"
          alt="Avatar"
          loading="lazy"
        />
        <div className={styles.reviewBlockInfo}>
          <h4>Taylor Wilson</h4>
          <span>Product Manager - Static Mania</span>
        </div>
      </div>
    </article>
  );
};

export default ReviewBlock;
