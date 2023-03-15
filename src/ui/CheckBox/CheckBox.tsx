import classNames from 'classnames';
import React, { FC } from 'react';

import styles from './CheckBox.module.scss';

import { CheckBoxProps } from './CheckBox.types';

const CheckBox: FC<CheckBoxProps> = ({ label, isChecked, onToggle, className }) => {
  return (
    <label className={classNames(styles.label, className)}>
      <input
        type="checkbox"
        className={styles.input}
        checked={isChecked}
        onChange={() => onToggle(!isChecked)}
      />
      <div className={styles.divDisplay}></div>
      {label}
    </label>
  );
};
export default CheckBox;
