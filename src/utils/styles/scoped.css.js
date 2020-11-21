import { css } from '@emotion/react';
import { secondaryColor, navLinkColor } from './colorscheme';

export const navBarCSS = css`
  a {
    color: ${navLinkColor};
    text-decoration: none;

    &:hover {
      text-decoration: none;
      box-shadow: none;
    }

    &:active {
      box-shadow: none;
      text-decoration: none;
    }
  }

  .left {
    vertical-align: top;

    h2 {
      padding-bottom: 1rem;
    }
  }

  .right {
    display: flex;
    justify-content: center;
    vertical-align: middle;
    align-items: center;

    ul {
      display: flex;
      list-style: none;
      bottom: 0;
      width: 100%;
      margin: auto;
      justify-content: space-around;
      align-items: center;
      color: ${secondaryColor};
    }

    li {
      margin: auto;
      padding-right: 1rem;
    }
  }
`;

export const parallaxCSS = css``;
