import React, { useState } from 'react';
import Img from 'gatsby-image';
import styled from '@emotion/styled';
import { GoQuote } from 'react-icons/go';

import {
  mobileLandscape480,
  tabletLandscape992,
} from '../utils/style/breakpoints';
import {
  darkAccentColor,
  mainTextColor,
  primaryColor,
  secondaryColor,
} from '../utils/style/colorscheme';
import { rhythm } from '../utils/style/typography';

const PostWrapper = styled.div`
  position: relative;

  #caption {
    position: absolute;
    top: 4.3em;
    padding: 0.5em;
    font-size: ${rhythm(0.5)};
    width: 10rem;
    height: 20rem;
    z-index: 15;
    overflow-y: scroll;
    border-radius: 5px;
    border: 1px solid ${secondaryColor};
    background-color: ${darkAccentColor};
    scrollbar-width: thin;
    scrollbar-color: ${secondaryColor} ${darkAccentColor};

    ::-webkit-scrollbar {
      width: 10px;
    }
    ::-webkit-scrollbar-track {
      background: ${darkAccentColor};
    }

    ::-webkit-scrollbar-thumb {
      background-color: ${`#555`};
      border-radius: 20px;
    }

    ${mobileLandscape480} {
      top: 4.6em;
      width: 15rem;
      height: 15rem;
      font-size: ${rhythm(0.55)};
    }
  }
`;

const ImgWrapper = styled.div`
  position: relative;
  width: 10em;
  height: 10em;
  margin-top: 1em;
  border-radius: 5px;
  overflow: hidden;

  ${mobileLandscape480} {
    width: 15em;
    height: 15em;
  }
`;

const CaptionBtn = styled.button<{ isActive: boolean }>`
  position: absolute;
  /* display: none; */
  display: flex;
  justify-content: center;
  top: 5%;
  right: 5%;
  z-index: 10;
  width: 1.6rem;
  height: 1.6rem;
  font-size: ${rhythm(0.9)};
  border-radius: 50%;
  border: 1px solid
    ${({ isActive }) => (isActive ? darkAccentColor : secondaryColor)};
  background-color: ${({ isActive }) =>
    isActive ? secondaryColor : darkAccentColor};
  color: ${({ isActive }) => (isActive ? darkAccentColor : mainTextColor)};
  transition: background-color 0.3s ease-in-out, color 0.3s ease-in-out;

  svg {
    margin: auto;
  }

  &:hover {
    cursor: pointer;
    color: ${darkAccentColor};
    background-color: ${secondaryColor};
  }

  ${mobileLandscape480} {
    width: 2rem;
    height: 2rem;
  }
  ${tabletLandscape992} {
    display: flex;
    justify-content: center;
  }
`;

const DropDownCaption = ({ caption }) => {
  return (
    <div id="caption">
      <p>{caption}</p>
    </div>
  );
};

const InstaPost = ({ post: { caption, image } }: any) => {
  const [open, toggleOpen] = useState(false);

  return (
    <PostWrapper>
      <ImgWrapper>
        <CaptionBtn isActive={open} onClick={() => toggleOpen(!open)}>
          <GoQuote />
        </CaptionBtn>
        <Img fluid={image.sharp.fluid} />
      </ImgWrapper>
      {open && <DropDownCaption caption={caption} />}
    </PostWrapper>
  );
};

export default InstaPost;
