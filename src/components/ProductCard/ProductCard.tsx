import React, { FC } from 'react';
import Button  from '../../ui/Button';
import BathRoomIcon from '../../assets/icons/bath-room.svg';
import BedRoomIcon from '../../assets/icons/bed-room.svg';
import LocationCardIcon from '../../assets/icons/card-location.svg';
import ForWhomIcon from '../../assets/icons/for-whom.svg';
import SquareIcon from '../../assets/icons/square.svg';


import styles from './ProductCard.module.scss';
import { House } from './ProductCard.types';


const ProductCard: FC<House> = ({ product }) => {
  return (
    <article className={styles.itemProduct}>
      <img
        src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2375&q=80"
        alt="Product"
      />
      <div className={styles.featuredPropertiesBody}>
        <h5>
          <LocationCardIcon />
          {product.location}
        </h5>
        <div className={styles.rooms}>
          <span>
            <BedRoomIcon />{product.bedRoom} Bed Room
          </span>
          <span>
            <BathRoomIcon />{product.bathRoom} Bath
          </span>
        </div>
        <div className={styles.forWhom}>
          <span>
            <SquareIcon />
            {product.quadrature} sqft
          </span>
          <span>
            <ForWhomIcon />
            {product.type}
          </span>
        </div>
        <div className={styles.btnAndPrice}>
          <Button>View Details</Button>
          <strong>${product.price}</strong>
        </div>
      </div>
    </article>
  );
};

export default ProductCard;
