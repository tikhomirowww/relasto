import cx from 'classnames';
import React, { FC } from 'react';

import styles from './Input.module.scss';
import { InputProps } from './Input.types';

const Input: FC<InputProps> = ({
  postfixIcon,
  prefixIcon,
  onChange,
  placeholder,
  className,
  width,
  value,
  type,
}) => {
  return (
    <div className={styles.input_main}>
      <input
        style={{ width: width }}
        className={cx(
          styles.input,
          {
            [styles.input_both]: prefixIcon && postfixIcon,
            [styles.input_prefix]: prefixIcon,
            [styles.input_postfix]: postfixIcon,
          },
          className,
        )}
        type={type}
        onChange={onChange}
        placeholder={placeholder}
        value={value}
      />
      {prefixIcon && <div className={styles.prefix_input_icon}>{prefixIcon}</div>}
      {postfixIcon && <div className={styles.postfix_input_icon}>{postfixIcon}</div>}
    </div>
  );
};

export default Input;
