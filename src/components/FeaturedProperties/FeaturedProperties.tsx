import React from 'react';
import ProductCard  from '../ProductCard';
import ArrowRightIcon from '../../assets/icons/arrow-right.svg';


import styles from './FeaturedProperties.module.scss';
import { FeatureMockData }  from '../../mocks/featuredPropertiesMock';



const FeaturedProperties: React.FC = () => {
  return (
    <section className={styles.featuredProperties}>
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
          {
            FeatureMockData.map(house => <ProductCard key={house._id} product={{...house}}/>)
          }
        </div>
      </div>
    </section>
  );
};

export default FeaturedProperties;
