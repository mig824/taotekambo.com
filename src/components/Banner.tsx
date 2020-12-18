/** @jsx jsx */
import _React, { useEffect, useRef } from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { css, jsx } from '@emotion/react';
import Img from 'gatsby-image';
import Rellax from 'rellax';

import {
  darkAccentColor,
  secondaryColor,
} from '../utils/global/colorscheme.js';

const bannerCSS = css`
  max-height: fit-content;
  width: 100%;
  overflow: hidden;
  position: relative;

  .text-wrapper {
    z-index: 2;
    position: absolute;
    bottom: 30%;
    width: 40%;
    text-align: center;
    margin-left: 1rem;

    h3 {
      color: ${secondaryColor};
    }
  }

  .title-wrapper {
    z-index: 2;
    position: absolute;
    margin: auto;
    top: 0;
    left: 0;
    right: 0;
    width: 40%;
    text-align: center;
    width: 100%;
    display: flex;
    justify-content: center;
    background-color: ${darkAccentColor};

    h3 {
      color: ${secondaryColor};
    }
  }
`;

type BannerProps = {
  siteTitle: string;
  bannerText: string;
};

const Banner = ({ bannerText, siteTitle }: BannerProps) => {
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
        data-aos="zoom-out-right"
        data-aos-delay={400}
        data-aos-duration={2000}
      >
        <h3>{bannerText}</h3>
      </div>
      <div
        className="title-wrapper"
        data-aos="fade-down"
        data-aos-delay={400}
        data-aos-duration={2000}
        data-aos-anchor-position="top-center"
      >
        <h2>{siteTitle}</h2>
      </div>
      <Img fluid={data.strapiImages.singleImages.childImageSharp.fluid} />
    </div>
  );
};

export default Banner;
