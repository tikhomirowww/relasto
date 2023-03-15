import classNames from 'classnames';
import React, { FC } from 'react';

import styles from './Button.module.scss';
import { ButtonProps } from './Button.types';

const Button: FC<ButtonProps> = ({ className, children, variant = 'filled', ...props }) => {
  return (
    <button {...props} className={classNames(styles.button, styles[variant], className)}>
      {children}
    </button>
  );
};

export default Button;
