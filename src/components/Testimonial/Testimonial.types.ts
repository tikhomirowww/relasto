export type Testimonial = {
  author: string;
  position: string;
  text: string;
  image: string;
};

export type TestimonialsProps = {
  testimonials: Testimonial[];
};
