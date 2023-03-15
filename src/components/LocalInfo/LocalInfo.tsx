import React from 'react';
import Button from '../../ui/Button';
import styles from './LocalInfo.module.scss';
import { btns } from './consts';
import ButtonGroup from '../../ui/ButtonGroup';

const LocalInfo = () => {
  return (
    <div className={styles.main_local_block}>
      <h2 className={styles.title_local}>
        Trovilla Plan in Sereno Canyon - Estate
        <br /> Collection by Toll Brothers
      </h2>
      <p>2861 62nd Ave, Oakland, CA 94605</p>
      <div className={styles.price_main_local_block}>
        <div className={styles.price_local_block}>
          <h2>$649,900</h2>
          <p>Online / Cash Payment</p>
        </div>
        <div className={styles.price_local_block}>
          <h2>$850 / month</h2>
          <p>0% EMI for 6 Months</p>
        </div>
      </div>
      <div className={styles.text_local_block}>
        <h3>
          Well-constructed 1562 Sq Ft Home Is Now Offering <br /> To You In Uttara For Sale
        </h3>
        <p>
          A slider is great way to display a slideshow featuring images or videos, usually on your
          homepage. Adding sliders to your site is no longer difficult. You don’t have to know
          coding anymore. Just use a slider widget and it will automatically insert the slider on
          your web page. So, the Elementor slider would be a great tool to work with when building a
          WordPress site.
        </p>
      </div>
      <div>
        <h2>Local Information</h2>
        <div className={styles.local_btns}>
          <ButtonGroup
            onClick={(button) => console.log(button)}
            buttons={['Map', 'Schools', 'Crime', 'Shop & Eat']}
          />
        </div>
        <img className={styles.mapview} src="https://i.ibb.co/GT9HzXs/Mapview.png" alt="Mapview" />
      </div>
    </div>
  );
};

export default LocalInfo;
