import cn from 'classnames';
import React, { FC } from 'react';
import Select, { Props } from 'react-select';

import styles from './SelectInput.module.scss';

const SelectInput: FC<Props> = ({ options, className, onChange, ...props }) => {
  return (
    <Select
      className={cn(styles.selectInput, className)}
      options={options}
      onChange={onChange}
      {...props}
    />
  );
};

export default SelectInput;
