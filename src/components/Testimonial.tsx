import React from 'react';
import Img from 'gatsby-image';

type TestimonialData = {
  image: any;
  content: string;
  personDescription: string;
};

type TestimonialProps = {
  testimonial: TestimonialData;
  position: string;
};

const Testimonial = ({
  testimonial: { image, content, personDescription },
  position,
}: TestimonialProps) => (
  <div
    className="testimonial-slide"
    id={
      position === 'first'
        ? 'first-clone'
        : position === 'last'
        ? 'last-clone'
        : null
    }
  >
    <Img fixed={image.childImageSharp.fixed} />
    <small>{personDescription}</small>
    <p>{content}</p>
  </div>
);

export default Testimonial;
