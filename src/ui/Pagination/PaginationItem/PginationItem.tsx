import cn from 'classnames';
import React, { FC } from 'react';

import styles from './PginationItem.module.scss';
import { PaginationItem } from './PginationItem.types';

const PginationItem: FC<PaginationItem> = ({ page, currentPage, onPageChange, isDisabled }) => {
  return (
    <li
      className={cn(styles['page-item'], {
        [styles.active]: currentPage === page,
        [styles.disabled]: isDisabled,
      })}
      onClick={() => onPageChange(page)}
    >
      <span>{page}</span>
    </li>
  );
};

export default PginationItem;
