import React from 'react';

import Button from '../../ui/Button';
import styles from './UpdateNewsForm.module.scss';

const UpdateNewForm = () => {
  return (
    <div className={styles.updatenewform} id="updatenewform">
      <div className={styles.container}>
        <h3>For Recent Update, News.</h3>
        <span>
          We helps businesses customize, automate and scale up their ad production and delivery.
        </span>
        <div>
          <input type="email" placeholder="Enter your Email" />
          <Button>Subscribe</Button>
        </div>
      </div>
    </div>
  );
};

export default UpdateNewForm;
