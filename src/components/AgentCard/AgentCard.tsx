import React, { FC } from 'react';

import Button from '../../ui/Button';
import Rating from '../../ui/Rating';
import styles from './AgentCard.module.scss';
import { AgentCardProps } from './AgentCard.types';

const AgentCard: FC<AgentCardProps> = ({ agent }) => {
  return (
    <div className={styles.card}>
      <img src={agent.image} alt="Agent" />
      <div className={styles.agentBody}>
        <h4>{agent.name}</h4>
        <Rating rating={agent.rating} />
        <Button className={styles.btn} variant="outlined">
          View Profile
        </Button>
      </div>
    </div>
  );
};

export default AgentCard;
