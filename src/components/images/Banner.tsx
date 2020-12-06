/** @jsx jsx */
import React, { useEffect, useRef } from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { css, jsx } from '@emotion/react';
import Img from 'gatsby-image';
import Rellax from 'rellax';

import { secondaryColor } from '../../utils/styles/colorscheme';

const bannerCSS = css`
  max-height: fit-content;
  width: 100%;
  overflow: hidden;
  position: relative;

  .text-wrapper {
    z-index: 2;
    position: absolute;
    top: 10%;
    width: 40%;
    text-align: center;
    margin-left: 4rem;

    h3 {
      color: ${secondaryColor};
    }
  }
`;

const Banner = ({ bannerText }) => {
  const bannerWrapperRef = useRef();
  const data = useStaticQuery(graphql`
    query BannerImgQuery {
      strapiImages(name: { eq: "frog-on-a-rock" }) {
        singleImages {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  `);

  useEffect(() => {
    new Rellax(bannerWrapperRef.current, {
      speed: -10,
    });
  }, []);

  return (
    <div ref={bannerWrapperRef} css={bannerCSS}>
      <div
        className="text-wrapper"
        data-aos="fade-down-right"
        data-aos-delay={1000}
        data-aos-duration={2000}
      >
        <h3>{bannerText}</h3>
      </div>
      <Img fluid={data.strapiImages.singleImages.childImageSharp.fluid} />
    </div>
  );
};

export default Banner;
