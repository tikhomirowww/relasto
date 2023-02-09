import React from 'react';

import FacebookIcon from '../../assets/icons/facebook.svg';
import InstagramIcon from '../../assets/icons/instragram.svg';
import LinkedinIcon from '../../assets/icons/linkedin.svg';
import LogoIcon from '../../assets/icons/logo.svg';
import TwitterIcon from '../../assets/icons/twitter.svg';
import YoutubeIcon from '../../assets/icons/youtube.svg';
import styles from './Footer.module.scss';

const Features = [
  { name: 'Home v1', link: '#' },
  { name: 'Home v2', link: '#' },
  { name: 'About', link: '#' },
  { name: 'Contact', link: '#' },
  { name: 'Search', link: '#' },
];
const Information = [
  { name: 'Listing v1', link: '#' },
  { name: 'Listing v2', link: '#' },
  { name: 'Property Details', link: '#' },
  { name: 'Agent List', link: '#' },
  { name: 'Agent Profile', link: '#' },
];
const Documentation = [
  { name: 'Blog', link: '#' },
  { name: 'FAQ', link: '#' },
  { name: 'Privacy Policy', link: '#' },
  { name: 'License', link: '#' },
];
const Others = [
  { name: 'log in', link: '#' },
  { name: 'Enter OTP', link: '#' },
  { name: 'New Password', link: '#' },
  { name: 'Reset Password', link: '#' },
  { name: 'Create Account', link: '#' },
];
const Footer = (): JSX.Element => (
  <>
    <div className={styles.footer}>
      <div className={styles.footer_main}>
        <div className={styles.footer_contact}>
          <LogoIcon />
          <div className={styles.address}>
            <p>
              59 Bervely Hill Ave, Brooklyn Town, <br /> <br /> New York, NY 5630, CA, US
            </p>
          </div>
          <div className={styles.phone}>
            <a href="tel:+05668655698">+056 686 56 56 98</a>
          </div>
          <div className={styles.mail}>
            <a href="mailto:info@staticmania.com">info@staticmania.com</a>
          </div>
          <div>
            <ul className={styles.social_icons}>
              <li>
                <a href="https://www.facebook.com">
                  <FacebookIcon />
                </a>
              </li>
              <li>
                <a href="https://www.twitter.com">
                  <TwitterIcon />
                </a>
              </li>
              <li>
                <a href="https://www.instagram.com">
                  <InstagramIcon />
                </a>
              </li>
              <li>
                <a href="https://www.linkedin.com">
                  <LinkedinIcon />
                </a>
              </li>
              <li>
                <a href="https://www.youtube.com">
                  <YoutubeIcon />
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className={styles.footer_link}>
          <div className={styles.single_footer}>
            <ul>
              <h2 className={styles.h2}>Features</h2>
              {Features.map((link) => (
                <li className={styles.link} key={link.name}>
                  <a href={link.link}>{link.name}</a>
                </li>
              ))}
            </ul>
          </div>
          <div className={styles.single_footer}>
            <ul>
              <h2 className={styles.h2}>Information</h2>
              {Information.map((link) => (
                <li className={styles.link} key={link.name}>
                  <a href={link.link}>{link.name}</a>
                </li>
              ))}
            </ul>
          </div>
          <div className={styles.single_footer}>
            <ul>
              <h2 className={styles.h2}>Documentation</h2>
              {Documentation.map((link) => (
                <li className={styles.link} key={link.name}>
                  <a href={link.link}>{link.name}</a>
                </li>
              ))}
            </ul>
          </div>
          <div className={styles.single_footer}>
            <ul>
              <h2 className={styles.h2}>Others</h2>
              {Others.map((link) => (
                <li className={styles.link} key={link.name}>
                  <a href={link.link}>{link.name}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <div>
        <p>© Static Mania 2022. All rights reserved. / Template Documentation</p>
      </div>
    </div>
  </>
);

export default Footer;
