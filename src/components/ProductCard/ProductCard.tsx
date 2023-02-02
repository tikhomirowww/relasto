import React from 'react';
import LocationCardIcon from '../../assets/icons/card-location.svg';
import BedRoomIcon from '../../assets/icons/bed-room.svg';
import BathRoomIcon from '../../assets/icons/bath-room.svg';
import ForWhomIcon from '../../assets/icons/for-whom.svg';
import SquareIcon from '../../assets/icons/square.svg';

// Style
import styles from './ProductCard.module.scss';

const ProductCard: React.FC = () => {
  return (
    <article className={styles.itemProduct}>
      <img
        src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2375&q=80"
        alt="Product"
      />
      <div className={styles.featuredPropertiesBody}>
        <h5>
          <LocationCardIcon />
          2861 62nd Ave, Oakland, CA 94605
        </h5>
        <div className={styles.rooms}>
          <span>
            <BedRoomIcon />3 Bed Room
          </span>
          <span>
            <BathRoomIcon />1 Bath
          </span>
        </div>
        <div className={styles.forWhom}>
          <span>
            <SquareIcon />
            1,032 sqft
          </span>
          <span>
            <ForWhomIcon />
            Family
          </span>
        </div>
        <div className={styles.btnAndPrice}>
          <button>View Details</button>
          <strong>$649,900</strong>
        </div>
      </div>
    </article>
  );
};

export default ProductCard;
