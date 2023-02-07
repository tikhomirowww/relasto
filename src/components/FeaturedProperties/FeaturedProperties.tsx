import React from 'react';
import ProductCard  from '../ProductCard';
import ArrowRightIcon from '../../assets/icons/arrow-right.svg';


import styles from './FeaturedProperties.module.scss';

const mok = [
  {
    _id: 1,
    pictureHouse: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2375&q=80',
    location: '2861 62nd Ave, Oakland, CA 94605',
    bedRoom: '3',
    bathRoom: '1',
    quadrature: '1,032',
    type: 'Family',
    price: '649,900'
  },
  {
    _id: 2,
    pictureHouse: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2375&q=80',
    location: '2861 62nd Ave, Oakland, CA 94605',
    bedRoom: '3',
    bathRoom: '1',
    quadrature: '1,032',
    type: 'Family',
    price: '649,900'
  }, {
    _id: 3,
    pictureHouse: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2375&q=80',
    location: '2861 62nd Ave, Oakland, CA 94605',
    bedRoom: '3',
    bathRoom: '1',
    quadrature: '1,032',
    type: 'Family',
    price: '649,900'
  }, {
    _id: 4,
    pictureHouse: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2375&q=80',
    location: '2861 62nd Ave, Oakland, CA 94605',
    bedRoom: '3',
    bathRoom: '1',
    quadrature: '1,032',
    type: 'Family',
    price: '649,900'
  }, {
    _id: 5,
    pictureHouse: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2375&q=80',
    location: '2861 62nd Ave, Oakland, CA 94605',
    bedRoom: '3',
    bathRoom: '1',
    quadrature: '1,032',
    type: 'Family',
    price: '649,900'
  }, {
    _id: 6,
    pictureHouse: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2375&q=80',
    location: '2861 62nd Ave, Oakland, CA 94605',
    bedRoom: '3',
    bathRoom: '1',
    quadrature: '1,032',
    type: 'Family',
    price: '649,900'
  },
]

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
            mok.map(house => <ProductCard key={house._id} product={{...house}}/>)
          }
        </div>
      </div>
    </section>
  );
};

export default FeaturedProperties;
