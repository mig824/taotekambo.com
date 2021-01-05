import React from 'react';
import { Global as GlobalCSS, css } from '@emotion/react';

import {
  backgroundColor,
  secondaryColor,
  mainTextColor,
} from '../utils/style/colorscheme';
import { rhythm } from '../utils/style/typography';
import { tabletLandscape992 } from '../utils/style/breakpoints';
import NavBar from './NavBar';
import Footer from './Footer';
import 'aos/dist/aos.css';

const globalCSS = css`
  html,
  body {
    box-sizing: border-box;
    margin: 0px;
    padding: 0px;
    background-color: ${backgroundColor};
    position: relative;
    min-height: 100vh;
  }

  *,
  *::before,
  *::after {
    box-sizing: inherit;
  }

  main {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: auto;
    max-width: 100%;
    min-height: 100%;
    overflow-x: hidden;
    padding-bottom: 6em;
  }

  h1,
  h2,
  h3 {
    color: ${secondaryColor};
    margin-bottom: 2rem;
  }

  p {
    color: ${mainTextColor};
  }

  ${tabletLandscape992} {
    h1,
    h2,
    h3 {
      font-size: ${rhythm(0.9)};
    }

    p,
    a,
    li {
      font-size: ${rhythm(0.7)};
    }
  }
`;

const Layout = ({ children }: any) => {
  return (
    <>
      <GlobalCSS styles={globalCSS} />
      <NavBar />
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
