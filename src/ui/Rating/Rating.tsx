import React, { FC } from 'react';

import Empty from '../../assets/icons/empty-rating.svg';
import Full from '../../assets/icons/full-rating.svg';
import Half from '../../assets/icons/half-rating.svg';
import styles from './Rating.module.scss';

export type RatingProps = {
  rating: number;
};
const Rating: FC<RatingProps> = ({ rating }) => {
  return (
    <div className={styles.rating}>
      <div className={styles.rating_body}>
        <div className={styles.rating_items}>
          {[...Array(5)].map((_, i) => {
            const ratingValue = rating - i;
            return ratingValue >= 1 ? (
              <Full className={styles.rating_item} />
            ) : ratingValue >= 0.5 ? (
              <Half className={styles.rating_item} />
            ) : (
              <Empty className={styles.rating_item} />
            );
          })}
        </div>
      </div>
      <div className={styles.rating_value}>{rating} review</div>
    </div>
  );
};

export default Rating;
