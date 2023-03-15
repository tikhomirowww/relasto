import React, { FC } from 'react';
import { IButtonGroup } from './ButtonGroup.types';
import Button from '../Button';
import styles from './ButtonGroup.module.scss';

const ButtonGroup: FC<IButtonGroup> = ({ buttons, onClick }) => {
  return (
    <div className={styles.button_group}>
      {buttons.map((item, index) => (
        <Button onClick={() => onClick(item)} key={index}>
          {item}
        </Button>
      ))}
    </div>
  );
};

export default ButtonGroup;
