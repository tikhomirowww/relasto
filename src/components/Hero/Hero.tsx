import React from 'react';
// import '../Hero/Hero.module.css'
import './/Hero.module.scss';
import Home from '../../assets/icons/Home.svg';
import Search from '../../assets/icons/search.svg';

const Hero = () => {
  return (
    <>
      <div className="hero_main">
        <div className="hero_left">
          <h2>
            Find a perfect property <br /> Where you'll love to live
          </h2>
          <p>
            We helps businesses customize, automate and scale up <br /> their ad production and
            delivery.
          </p>
          <div className="hero_btns_block">
            <button className="hero_btn">Buy</button>
            <button className="hero_btn">Sell</button>
            <button className="hero_btn">Rent</button>
          </div>
          <div className="hero_info_block">
            <div className="hero_info_item">
              <div className="info_mini_desc">City/Street</div>
              <div className="info_bold_desc">New York City</div>
            </div>
            <div className="hero_info_item">
              <div className="info_mini_desc">Property Type</div>
              <div className="info_bold_desc">Duplex House</div>
            </div>
            <div className="hero_info_item">
              <div className="info_mini_desc">Property Type</div>
              <div className="info_bold_desc">$15000 - $350000</div>
            </div>
            <div className="hero_info_item">
              <div className="hero_info_search">
                <Search />
              </div>
            </div>
          </div>
        </div>
        <div className="hero_right">
          <Home />
        </div>
      </div>
    </>
  );
};

export default Hero;
