import React from 'react';

import BlogAndSubscribe from '../..//components/BlogAndSubscribe/BlogAndSubscribe';
import FeatureBlock from '../../components/FeatureBlock';
import FeaturedProperties from '../../components/FeaturedProperties';
import Hero from '../../components/Hero';
import HowItWorks from '../../components/HowItWorks';
import OurAchievement from '../../components/OurAchievements';
import Testimonial from '../../components/Testimonial';

const HomePage = () => {
  return (
    <>
      <Hero />
      <HowItWorks />
      <OurAchievement />
      <FeaturedProperties />
      <FeatureBlock />
      <Testimonial
        testimonials={[
          {
            author: 'Taylor Wilson',
            position: 'Product Manager - Static Mania',
            text: 'Eget eu massa et consectetur. Mauris donec. Leo a, id sed duis proin sodales. Turpis viverra diam porttitor mattis morbi ac amet. Euismod commodo. We get you customer relationships that last.',
            image:
              'https://images.unsplash.com/photo-1508216310976-c518daae0cdc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1003&q=80',
          },
        ]}
      />
      <BlogAndSubscribe />
    </>
  );
};

export default HomePage;
