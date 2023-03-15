import React from 'react';
import styles from './PropertyListings.module.scss';
import ExploreAll from '../../ui/ExploreAll';
import ProductCard from '../ProductCard';
import { propertyListingsMock } from '../../mocks/listingPropertiesMock';

const PropertyListings = () => {
  return (
    <div className={styles.listings_main}>
      <div className={styles.property_title}>
        <h2>Latest Property Listings</h2>
        <ExploreAll />
      </div>
      <div className={styles.listing_cards}>
        {propertyListingsMock.map((item) => (
          <ProductCard key={item._id} variant="light" product={{ ...item }} />
        ))}
      </div>
    </div>
  );
};

export default PropertyListings;
