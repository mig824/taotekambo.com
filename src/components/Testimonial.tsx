import React from 'react';
import Img from 'gatsby-image';

const Testimonial = ({ testimonial, position }) => {
  const { image, content, personDescription } = testimonial;

  return (
    <div
      className="carousel-slide"
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
};

export default Testimonial;
