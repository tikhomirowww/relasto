import React from 'react';
import { BsPlusLg } from 'react-icons/bs';
import { IoIosArrowDown } from 'react-icons/io';

import Button from '../../ui/Button';
import ContainerLayout from '../ContainerLayout';
import styles from './ClientsReviewForm.module.scss';
import ReviewBlock from './ReviewBlock';

const ClientsReviewForm = () => {
  return (
    <ContainerLayout>
      <div className={styles.clientsReviewForm}>
        <div className={styles.clientsReviewFormHeader}>
          <h2>Clients Review</h2>
          <Button>
            Write a Reveiw <BsPlusLg size={14} />
          </Button>
        </div>
        <div className={styles.clientsReviewFormMain}>
          <ReviewBlock />
          <ReviewBlock />
          <ReviewBlock />
          <ReviewBlock />
          <Button variant="outlined">
            See more <IoIosArrowDown size={16} />
          </Button>
        </div>
      </div>
    </ContainerLayout>
  );
};

export default ClientsReviewForm;
