import React from 'react';

import ArrowRightIcon from '../../assets/icons/arrow-right.svg';
import UpdateNewForm from '../UpdateNewsForm/UpdateNewsForm';
import styles from './BlogAndSubscribe.module.scss';

const BlogAndSubscribe = () => {
  return (
    <div className={styles.section_blogandsubscribe} id="section_blogandsubscribe">
      <div className={styles.container}>
        <div className={styles.blogandsubscribe_content}>
          <div className={styles.blogandsubscribe_header}>
            <h3>News & Consult</h3>
            <span>
              Explore All <ArrowRightIcon />
            </span>
          </div>
          <div className={styles.blogandsubscribe_news}>
            <div>
              <img
                src="https://images.unsplash.com/photo-1568605114967-8130f3a36994?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2370&q=80"
                alt="House"
              />
              <p>9 Easy-to-Ambitious DIY Projects to Improve Your Home</p>
              <span>
                Read the Article <ArrowRightIcon />
              </span>
            </div>

            <div>
              <img
                src="https://images.unsplash.com/photo-1575517111478-7f6afd0973db?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2370&q=80"
                alt="House"
              />
              <p>Serie Shophouse Launch In July, Opportunity For Investors</p>
              <span>
                Read the Article <ArrowRightIcon />
              </span>
            </div>

            <div>
              <img
                src="https://images.unsplash.com/photo-1543226414-ce7d5f82258f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2370&q=80"
                alt="House"
              />
              <p>Looking for a New Place? Use This Time to Create Your Wishlist</p>
              <span>
                Read the Article <ArrowRightIcon />
              </span>
            </div>
          </div>
          <div className={styles.form}>
            <UpdateNewForm />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogAndSubscribe;
