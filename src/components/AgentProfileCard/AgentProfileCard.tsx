import React from 'react';
import { CiFacebook, CiLinkedin, CiTwitter } from 'react-icons/ci';
import { HiOutlineMailOpen } from 'react-icons/hi';
import { RiPhoneLine } from 'react-icons/ri';
import { SlSocialYoutube } from 'react-icons/sl';

import Button from '../../ui/Button';
import Rating from '../../ui/Rating';
import ContainerLayout from '../ContainerLayout';
import styles from './AgentProfileCard.module.scss';

const AgentProfileCard = () => {
  return (
    <ContainerLayout>
      <section className={styles.agentProfileCard}>
        <div className={styles.leftSection}>
          <div className={styles.leftSectionTop}>
            <img
              src="https://images.unsplash.com/photo-1552058544-f2b08422138a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=999&q=80"
              alt="Avatar Bruno Fernandes"
              loading="lazy"
            />
            <div className={styles.sectionTopRight}>
              <div className={styles.topRight}>
                <h4>Bruno Fernandes</h4>
                <Rating rating={4.5} />
              </div>
              <div className={styles.topRightContacts}>
                <span>
                  <RiPhoneLine size={24} />
                  (302) 555-0107
                </span>
                <span>
                  <HiOutlineMailOpen size={24} />
                  staticmania@gmail.com
                </span>
              </div>
            </div>
          </div>
          <p>
            A slider is great way to display a slideshow featuring images or videos, usually on your
            Adding sliders to your site is no longer difficult. You don’t have to know coding
            anymore. Just use a slider widget and it will automatically insert the slider on your
            web page. of the best ways to add beautiful sliders with excellent responsiveness and
            advanced options.
          </p>
          <Button>Contact</Button>
        </div>
        <div className={styles.rightSection}>
          <section>
            <h4>Experiences</h4>
            <span>15+ years experience</span>
          </section>
          <section>
            <h4>Property Types</h4>
            <span>Private House, Villa, Townhouse, Apartment</span>
          </section>
          <section>
            <h4>Area</h4>
            <span>California, San Jose, Miami</span>
          </section>
          <section>
            <h4>Address</h4>
            <span>59 Orchard, NY 5005, US</span>
          </section>
          <div className={styles.rightSectionLicense}>
            <div>
              <h4>License No</h4>
              <span>BF-0535</span>
            </div>
            <div>
              <h4>Website</h4>
              <a href="#">www.staticmania.com</a>
            </div>
          </div>
          <div className={styles.rightSectionSocial}>
            <h4>Social</h4>
            <div>
              <a href="#">
                <CiFacebook />
              </a>
              <a href="#">
                <CiLinkedin />
              </a>
              <a href="#">
                <CiTwitter />
              </a>
              <a href="#">
                <SlSocialYoutube />
              </a>
            </div>
          </div>
        </div>
      </section>
    </ContainerLayout>
  );
};

export default AgentProfileCard;
