import React from 'react';
import Highlights from '../../components/Highlights';
import Gallery from '../../components/Gallery/Gallery';
import LocalInfo from '../../components/LocalInfo';
import RequestForVisit from '../../components/RequestForVisit';
import styles from './PropertyDetailsPage.module.scss';
import AgentInfo from '../../components/AgentInfo';
import PropertyListings from '../../components/ProperyListings/PropertyListings';
import ContainerLayout from '../../components/ContainerLayout';

const PropertyDetailsPage = () => {
  return (
    <div className={styles.property_page_main}>
      <ContainerLayout>
        <Gallery
          images={[
            'https://i.ibb.co/y8M2KzZ/Rectangle-5610.png',
            'https://i.ibb.co/h81HCd0/Rectangle-5611.png',
            'https://i.ibb.co/8c3BDfh/Rectangle-5612.png',
            'https://i.ibb.co/y8M2KzZ/Rectangle-5610.png',
            'https://i.ibb.co/h81HCd0/Rectangle-5611.png',
          ]}
        />
        <div className={styles.info_block}>
          <LocalInfo />
          <RequestForVisit />
        </div>
        <Highlights />
        <AgentInfo />
        <PropertyListings />
      </ContainerLayout>
    </div>
  );
};

export default PropertyDetailsPage;
