import React, { FunctionComponent } from 'react';
import Img from 'gatsby-image';
import styled from '@emotion/styled';
import { tabletPortrait768 } from '../utils/style/breakpoints';

const ImgWrapper = styled.div`
  width: 70px;
  margin: auto;

  ${tabletPortrait768} {
    width: 90px;
  }
`;

const InfoWrapper = styled.div`
  display: flex;
`;

type TestimonialProps = {
  testimonial: {
    image: any;
    content: string;
    personDescription: string;
  };
  position: string;
};

const Testimonial: FunctionComponent<TestimonialProps> = ({
  testimonial: { image, content, personDescription },
  position,
}) => (
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
    <InfoWrapper>
      <ImgWrapper>
        <Img fluid={image.childImageSharp.fluid} />
      </ImgWrapper>
      <small>{personDescription}</small>
    </InfoWrapper>
    <p>{content}</p>
  </div>
);

export default Testimonial;
