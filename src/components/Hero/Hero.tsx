import cn from 'classnames';
import React, { FC, useState } from 'react';
import { CiLocationOn } from 'react-icons/ci';
import { IoMdSearch } from 'react-icons/io';
import { TbSelector } from 'react-icons/tb';

import styles from './Hero.module.scss';

const Hero: FC = () => {
  const options = ['Buy', 'Sell', 'Rent'];
  const [variant, setVariant] = useState('Buy');
  return (
    <article className={styles.section_hero} id="banner-section">
      <div className={styles.container}>
        <div className={styles.banner}>
          <h2 className={styles.banner_title}>Find a perfect property Where you'll love to live</h2>
          <p className={styles.banner_description}>
            We helps businesses customize, automate and scale up their ad production and delivery.
          </p>
          <div className={styles.banner_settings}>
            <ul className={styles.banner_variant}>
              {options.map((option) => (
                <li
                  onClick={() => setVariant(option)}
                  className={cn({
                    [styles.active]: variant === option,
                  })}
                  key={option}
                >
                  {option}
                </li>
              ))}
            </ul>
            <div className={styles.banner_filter}>
              <div className={styles.filter_option}>
                <div>
                  <span>City/Street</span>
                  <p>
                    New York City <CiLocationOn />
                  </p>
                </div>
                <div>
                  <span>Property Type</span>
                  <p>
                    Duplex House <TbSelector />
                  </p>
                </div>
                <div>
                  <span>Price</span>
                  <p>
                    $15000 - $350000 <TbSelector />
                  </p>
                </div>
              </div>
              <div className={styles.option_search}>
                <IoMdSearch />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.banner__img}></div>
    </article>
  );
};

export default Hero;
