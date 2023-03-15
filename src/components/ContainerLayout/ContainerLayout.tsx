import React, { FC } from 'react';

import styles from './ContainerLayout.module.scss';
import { ContainterProps } from './ContainerLayout.types';

const ContainerLayout: FC<ContainterProps> = ({ children }) => {
  return <div className={styles.container_layout}>{children}</div>;
};

export default ContainerLayout;
