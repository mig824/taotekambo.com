import { css } from '@emotion/react';

import { secondaryColor, mainTextColor, backgroundColor } from './colorscheme';

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
  h2 {
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

export default globalCSS;
