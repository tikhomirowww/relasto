import React from 'react';
import ArrowRight from '../../assets/icons/arrow-right.svg';
import { ProductCard } from '../ProductCard';

import styles from './FeaturedProperties.module.scss';

const FeaturedProperties: React.FC = () => {
  return (
    <section className={styles.featuredProperties}>
      <div className={styles.featuredPropertiesContainer}>
        <div className={styles.featuredPropertiesTitle}>
          <h2>Featured Properties</h2>
          <a href="#">
            Explore All <ArrowRight />
          </a>
        </div>
        <ul className={styles.featuredPropertiesFilterBar}>
          <li className={styles.activeFilter}>Resident Property</li>
          <li>Commercial Property</li>
          <li>Industrial Property</li>
          <li>Agriculture Property</li>
        </ul>
        <div className={styles.featuredPropertiesItems}>
          {/* Card */}
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
