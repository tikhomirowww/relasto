import React from 'react';

import ArrowRightIcon from '../../assets/icons/arrow-right.svg';
import { FeatureMockData } from '../../mocks/featuredPropertiesMock';
import ProductCard from '../ProductCard';
import styles from './FeaturedProperties.module.scss';

const FeaturedProperties: React.FC = () => {
  return (
    <section className={styles.featuredProperties} id="feature-properties">
      <div className={styles.featuredPropertiesContainer}>
        <div className={styles.featuredPropertiesTitle}>
          <h2>Featured Properties</h2>
          <a href="#">
            Explore All <ArrowRightIcon />
          </a>
        </div>
        <ul className={styles.featuredPropertiesFilterBar}>
          <li className={styles.activeFilter}>Resident Property</li>
          <li>Commercial Property</li>
          <li>Industrial Property</li>
          <li>Agriculture Property</li>
        </ul>
        <div className={styles.featuredPropertiesItems}>
          {FeatureMockData.map((house) => (
            <ProductCard key={house._id} product={{ ...house }} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProperties;
