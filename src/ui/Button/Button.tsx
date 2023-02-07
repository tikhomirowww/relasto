import React, { FC } from 'react';

import styles from './Button.module.scss';
import { ButtonProps } from './Button.types';

const Button: FC<ButtonProps> = ({ children, ...props }): JSX.Element => {
  return (
    <button {...props} className={styles.button}>
      {children}
    </button>
  );
};

export default Button;
