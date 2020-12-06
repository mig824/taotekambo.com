/** @jsx jsx */
import React from 'react';
import { Link } from 'gatsby';
import { jsx, css } from '@emotion/react';

import Logo from './images/Logo';
import { PrimaryBtn } from '../utils/styles/styled-components';
import {
  navLinkColor,
  secondaryColor,
  secondaryColorHover,
} from '../utils/styles/colorscheme';

const NavBar = ({ siteTitle }: any) => (
  <nav css={navBarCSS}>
    <div className="left-div">
      <ul>
        <Link to="/shop">
          <li>Shop</li>
        </Link>
        <Link to="/blog">
          <li>Blog</li>
        </Link>
        <Link to="/contact">
          <li>Contact</li>
        </Link>
        <Link to="/ceremonies">
          <li>Ceremonies</li>
        </Link>
      </ul>
    </div>
    <div className="center-div">
      <div className="logo-div">
        <Link to="/">
          <Logo />
        </Link>
      </div>
    </div>
    <div className="right-div">
      <PrimaryBtn>Book a Session</PrimaryBtn>
    </div>
  </nav>
);

const navBarCSS = css`
  display: flex;
  max-height: 3.3rem;
  padding-top: 1rem;
  width: 100%;
  margin-bottom: 1rem;

  a {
    color: ${navLinkColor};
    text-decoration: none;

    &:hover {
      color: ${secondaryColorHover};
    }

    &:active {
    }
  }

  div {
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: space-around;
  }

  .left-div {
    display: flex;
    justify-content: center;
    align-items: center;
    padding-left: 0.7rem;

    ul {
      display: flex;
      list-style: none;
      margin: auto;
      align-items: center;
      color: ${secondaryColor};
    }

    li {
      margin: auto;
      padding-right: 0.6rem;
    }
  }

  .center-div {
    display: flex;
    justify-content: center;
    align-items: center;

    .logo-div {
      margin-top: 0.5rem;
      max-height: 65px;
      max-width: 65px;
      border: none;
    }
  }

  .right-div {
  }
`;

export default NavBar;
