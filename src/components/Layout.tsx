import React from 'react';
import { Global as GlobalCSS, css } from '@emotion/react';

import {
  backgroundColor,
  secondaryColor,
  mainTextColor,
} from '../utils/global/colorscheme';
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
    height: 100%;
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

  footer {
    position: fixed;
    bottom: 0;
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
