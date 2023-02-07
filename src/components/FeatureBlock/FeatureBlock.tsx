import React, { FC } from 'react';
import Button from '../../ui/Button';


import styles from './FeatureBlock.module.scss';

const FeatureBlock: FC = (): JSX.Element => {
  return (
    <section className={styles.featureBlock}>
      <div className={styles.featureBlockContainer}>
        <div className={styles.featureBlockContent}>
          <div className={styles.featureBlockContentTop}>
            <div className={styles.featureBlockContentTopLeft}>
              <h3>Simple & easy way to find your dream Appointment</h3>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. In a free
                hour, when our power of choice is untrammelled and when nothing prevents our being
                able to do what we like best, every pleasure is to be welcomed.
              </p>
              <Button>Get Started</Button>
            </div>
            <div className={styles.featureBlockContentTopRight}>
              <img
                src="https://images.unsplash.com/photo-1605276374104-dee2a0ed3cd6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2370&q=80"
                alt="Home Image"
              />
              <img
                src="https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2148&q=80"
                alt="Home Image"
              />
              <img
                src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2146&q=80"
                alt="Home Image"
              />
              <img
                src="https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2370&q=80"
                alt="Home Image"
              />
            </div>
          </div>
          <div className={styles.featureBlockContentBottom}>
            <div className={styles.featureBlockContentBottomLeft}>
              <div></div>
            </div>
            <div className={styles.featureBlockContentBottomRight}>
              <h3>Best rated host on popular rental sites</h3>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. In a free
                hour, when our power of choice is untrammelled.
              </p>
              <ul>
                <li>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  Find excellent deals
                </li>
                <li>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  Friendly host & Fast support
                </li>
                <li>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  Secure payment system
                </li>
              </ul>
              <Button>Learn more</Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeatureBlock;
