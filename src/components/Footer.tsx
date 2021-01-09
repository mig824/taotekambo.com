import React from 'react';
import styled from '@emotion/styled';

import { darkAccentColor, mainTextColor } from '../utils/style/colorscheme';
import { FaFacebookSquare, FaInstagramSquare } from 'react-icons/fa';
import { rhythm } from '../utils/style/typography';
import { tabletPortrait768 } from '../utils/style/breakpoints';

const FooterCSS = styled.footer`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  position: absolute;
  bottom: 0;
  height: 6em;
  width: 100%;
  background-color: ${darkAccentColor};

  div {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 15em;

    svg {
      color: ${mainTextColor};
      opacity: 0.8;
      font-size: ${rhythm(1)};
      margin: 0 0.2em;
      transition: font-size 0.3s ease-in-out, transform 0.3s ease-in-out;

      &:hover {
        cursor: pointer;
        opacity: 1;
        font-size: ${rhythm(1.1)};
        transform: translateY(-10%);

        ${tabletPortrait768} {
          font-size: ${rhythm(1.4)};
        }
      }

      ${tabletPortrait768} {
        font-size: ${rhythm(1.3)};
      }
    }
  }
`;

const Footer = () => {
  return (
    <FooterCSS>
      <div>
        <FaFacebookSquare
          onClick={() => window.open(`https://www.facebook.com/taotekambo`)}
        />
        <FaInstagramSquare
          onClick={() => window.open(`https://www.instagram.com/taotekambo`)}
        />
      </div>
    </FooterCSS>
  );
};

export default Footer;
