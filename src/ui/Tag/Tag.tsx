import React, { FC } from 'react';

import CloseIcon from '../../assets/icons/close.svg';
import styles from './Tag.module.scss';
import { TagProps } from './Tag.types';

const Tag: FC<TagProps> = ({ text, width, onClick }) => {
  return (
    <div style={{ width: width }} className={styles.tag_main}>
      <div className={styles.tag_text}>{text}</div>
      <div className={styles.tag_icon}>
        <CloseIcon onClick={onClick} />
      </div>
    </div>
  );
};

export default Tag;
