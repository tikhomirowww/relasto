import React, { FC } from 'react';
import { ButtonProps } from './Button.types';

import styles from './Button.module.scss';

const Button: FC<ButtonProps> = ({ children, ...props }): JSX.Element => {
  return (
    <button {...props} className={styles.button}>
      {children}
    </button>
  );
};

export default Button;
