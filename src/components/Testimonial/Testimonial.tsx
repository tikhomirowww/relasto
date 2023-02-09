import React, { FC, useRef } from 'react';
import SwiperCore from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import LeftArrowIcon from './../../assets/Icons/ArrowLeft.svg';
import RightArrowIcon from './../../assets/Icons/ArrowRight.svg';
import styles from './Testimonial.module.scss';
import { TestimonialsProps } from './Testimonial.types';

const Testimonial: FC<TestimonialsProps> = ({ testimonials }) => {
  const swiperRef = useRef<SwiperCore>();
  return (
    <section className={styles.section_testimonial} id="section-testimonial">
      <div className={styles.container}>
        <Swiper
          rewind={true}
          onBeforeInit={(swiper) => {
            swiperRef.current = swiper;
          }}
        >
          {testimonials.map((testi, i) => (
            <SwiperSlide className={styles.swiper_slide} key={i}>
              <div className={styles.slide_block}>
                <div className={styles.img}>
                  <img src={testi.image} alt="Tetsimonial image" />
                </div>
                <div className={styles.slide_description}>
                  <div>
                    <h3>Taylor Wilson</h3>
                    <span>Product Manager - Static Mania</span>
                  </div>
                  <p>
                    Eget eu massa et consectetur. Mauris donec. Leo a, id sed duis proin sodales.
                    Turpis viverra diam porttitor mattis morbi ac amet. Euismod commodo. We get you
                    customer relationships that last.{' '}
                  </p>
                  <div className={styles.buttons}>
                    <button className={styles.prev} onClick={() => swiperRef.current?.slidePrev()}>
                      <LeftArrowIcon /> <span className={styles.span}>Previews</span>
                    </button>
                    <button className={styles.next} onClick={() => swiperRef.current?.slideNext()}>
                      <span className={styles.span}>Next</span> <RightArrowIcon />
                    </button>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Testimonial;
