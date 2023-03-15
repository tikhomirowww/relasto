import React, { FC, useState } from 'react';

import SerachIcon from '../../assets/icons/search-grey.svg';
import { FeatureMockData } from '../../mocks/featuredPropertiesMock';
import Button from '../../ui/Button';
import Input from '../../ui/Input';
import Pagination from '../../ui/Pagination';
import SelectInput from '../../ui/SelectInput';
import Tag from '../../ui/Tag';
import ProductCard from '../ProductCard';
import styles from './FindProperty.module.scss';

const FindProperty: FC = () => {
  const [adress, setAdress] = useState('');
  const handleTagClick = () => {};

  const options = [
    { value: 'buy', label: 'Buy' },
    { value: 'sell', label: 'Sell' },
    { value: 'rent', label: 'Rent' },
  ];

  const options1 = [
    { value: '$15000 - $18000', label: '$15000 - $18000' },
    { value: '$25000 - $50000', label: '$25000 - $50000' },
    { value: '$50000 - $100000', label: '$50000 - $100000' },
  ];
  const options3 = [
    { value: 'bed - 3', label: 'Bed - 3' },
    { value: 'bed - 2', label: 'Bed - 2' },
    { value: 'bed - 1', label: 'Bed - 1' },
  ];

  const handleAdressChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setAdress(event.target.value);
  };
  const [currentPage, setCurrentPage] = useState(1);
  const totalItems = FeatureMockData.length;
  const itemsPerPage = 8;

  const handlePageChange = (selectedPage: React.SetStateAction<number>) => {
    setCurrentPage(selectedPage);
  };

  return (
    <div className={styles.main}>
      <div className={styles.container}>
        <h1 className={styles.title}>Find Property</h1>
        <div className={styles.filter}>
          <Input
            onChange={handleAdressChange}
            placeholder="Enter your adress"
            value={adress}
            postfixIcon={<SerachIcon />}
            className={styles.input}
            width="415px"
            type="text"
          />
          <SelectInput options={options} className={styles.select1} value={options[0]} />
          <SelectInput options={options1} className={styles.select2} value={options1[0]} />
          <SelectInput options={options3} className={styles.select3} value={options3[0]} />
          <div className={styles.modal}>
            <p>More +</p>
          </div>
          <Button>Search</Button>
        </div>
        <div className={styles.tag}>
          <Tag text="Bathroom +" onClick={handleTagClick} />
          <Tag text="Square Feet 750 - 2500 sq.ft" onClick={handleTagClick} />
          <Tag text="Year Built 5-15" onClick={handleTagClick} />
          <Tag text="For Sale By Agent" onClick={handleTagClick} />
          <Tag text="New Constructions" onClick={handleTagClick} />
        </div>
        <div className={styles.content}>
          <div className={styles.left}>
            <div>
              <img src="https://i.ibb.co/wB3h4P4/Map-Map.png" alt="Map" />
            </div>
          </div>
          <div className={styles.right}>
            <div className={styles.product}>
              {FeatureMockData.map((house) => (
                <ProductCard key={house._id} product={{ ...house }} />
              ))}
            </div>

            <div className={styles.pagination}>
              <Pagination
                currentPage={currentPage}
                total={totalItems}
                limit={itemsPerPage}
                onPageChange={handlePageChange}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FindProperty;
