import React, { FC } from 'react';
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
  testimonial: any;
  position: string;
};

const Testimonial: FC<TestimonialProps> = ({
  testimonial: { frontmatter, html },
  position,
}) => {
  return (
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
          <Img fluid={frontmatter?.image.sharp.fluid} />
        </ImgWrapper>
        <small>{frontmatter?.person}</small>
      </InfoWrapper>
      <div dangerouslySetInnerHTML={{ __html: html }} />
    </div>
  );
};

export default Testimonial;
