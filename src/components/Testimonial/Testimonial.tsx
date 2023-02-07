import React, { FC, useRef } from 'react';
import SwiperCore from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import QuoteIcon from '../../assets/Icons/TestimonialQuote.svg';
import LeftArrowIcon from './../../assets/Icons/ArrowLeft.svg';
import RightArrowIcon from './../../assets/Icons/ArrowRight.svg';
import styles from './Testimonial.module.scss';
import { TestimonialsProps } from './Testimonial.types';

const Testimonial: FC<TestimonialsProps> = ({ testimonials }) => {
  const swiperRef = useRef<SwiperCore>();
  return (
    <div className={styles.container}>
      <Swiper
        rewind={true}
        onBeforeInit={(swiper) => {
          swiperRef.current = swiper;
        }}
      >
        {testimonials.map((testimonial, i) => (
          <SwiperSlide className={styles.swiper_slide} key={i}>
            <div className={styles.slide}>
              <div className={styles.img}>
                <img src={testimonial.image} alt="Tetsimonial image" />
              </div>
              <div className={styles.slide_text}>
                <div className={styles.testimonial_info}>
                  <div className={styles.testimonial_infoDiv}>
                    <h1 className={styles.testimonial_auhor}>{testimonial.author}</h1>
                    <p className={styles.testimonial_position}>{testimonial.position}</p>
                  </div>
                  <div className={styles.quotImage}>
                    <QuoteIcon />
                  </div>
                </div>
                <div className={styles.testimonial_text}>
                  <p>"{testimonial.text}"</p>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <div className={styles.buttons}>
        <button className={styles.prev} onClick={() => swiperRef.current?.slidePrev()}>
          <LeftArrowIcon /> <span className={styles.span}>Previews</span>
        </button>
        <button className={styles.next} onClick={() => swiperRef.current?.slideNext()}>
          <span className={styles.span}>Next</span> <RightArrowIcon />
        </button>
      </div>
    </div>
  );
};

export default Testimonial;
