import React from 'react';
import { Link } from 'react-router-dom';
import ProductCard  from '../ProductCard';
import ArrowRightIcon from '../../assets/icons/arrow-right.svg';


import styles from './FeaturedProperties.module.scss';

const FeaturedProperties: React.FC = (): JSX.Element => {
  return (
    <section className={styles.featuredProperties}>
      <div className={styles.featuredPropertiesContainer}>
        <div className={styles.featuredPropertiesTitle}>
          <h2>Featured Properties</h2>
          {/* <Link to="#">
            Explore All <ArrowRightIcon />
          </Link> */}
        </div>
        <ul className={styles.featuredPropertiesFilterBar}>
          <li className={styles.activeFilter}>Resident Property</li>
          <li>Commercial Property</li>
          <li>Industrial Property</li>
          <li>Agriculture Property</li>
        </ul>
        <div className={styles.featuredPropertiesItems}>
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
        </div>
      </div>
    </section>
  );
};

export default FeaturedProperties;
