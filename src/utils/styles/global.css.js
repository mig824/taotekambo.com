import { css } from '@emotion/react';

import { primaryColor, secondaryColor, mainTextColor } from './colorscheme';

const globalCSS = css`
  html,
  body {
    box-sizing: border-box;
    margin: 0px;
    padding: 0px;
    background-color: #2f4f4f;
    height: 100%;
  }

  *,
  *::before,
  *::after {
    box-sizing: inherit;
  }

  main {
    margin: auto;
    max-width: 100%;
    min-height: 100%;
    padding: 0 1.0875rem 1.45rem;
    perspective: 5px;
    overflow-x: hidden;
  }

  nav {
    display: flex;
    background: ${primaryColor};
    /* flex: 2 1 auto; */
    max-height: 3.3rem;
    width: 100%;
    border: green 1px solid;
    justify-content: space-between;
  }

  section {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 70%;
    margin: auto;
    position: relative;
    z-index: 1;
  }

  h1 {
    color: ${secondaryColor};
  }

  p {
    color: ${mainTextColor};
  }

  footer {
    position: absolute;
    margin-top: 2rem;
    bottom: 0;
  }
`;

export default globalCSS;
