import React, { useEffect, useRef } from 'react';
import styled from '@emotion/styled';
import Img, { FluidObject } from 'gatsby-image';
import Rellax from 'rellax';

import { secondaryColor } from '../utils/style/colorscheme';
import {
  tabletLandscape992,
  tabletPortrait768,
} from '../utils/style/breakpoints';

const BannerCSS = styled.div`
  max-height: 100vh;
  width: 100%;
  overflow: hidden;
  position: relative;

  .text-wrapper {
    z-index: 2;
    position: absolute;
    bottom: 0;
    width: 16em;
    text-align: center;
    margin-left: 1rem;
    display: none;

    h3 {
      color: ${secondaryColor};
    }

    ${tabletPortrait768} {
      display: block;
    }

    ${tabletLandscape992} {
      top: 10%;
      margin-left: 1.3em;
    }
  }

  .title-wrapper {
    position: absolute;
    z-index: 2;
    top: 0;
    bottom: 10%;
    left: 0;
    right: 0;
    display: flex;
    justify-content: center;
    align-items: center;

    h3 {
      color: ${secondaryColor};
      padding-bottom: 1rem;
    }
  }
`;

type BannerProps = {
  siteTitle: string;
  bannerImg: FluidObject;
};

const Banner = ({ bannerImg, siteTitle }: BannerProps) => {
  const bannerWrapperRef = useRef();

  useEffect(() => {
    new Rellax(bannerWrapperRef.current, {
      speed: -10,
    });
  }, []);

  return (
    <BannerCSS ref={bannerWrapperRef}>
      <div
        className="text-wrapper"
        data-aos="zoom-out-right"
        data-aos-delay={400}
        data-aos-duration={2000}
      >
        <h3>
          Can a Little Known Amazonian Frog Medicine Help You Heal and Align
          Your Life in a Single Session?
        </h3>
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
      <Img fluid={bannerImg} />
    </BannerCSS>
  );
};

export default Banner;
