import React from 'react';
import { Link } from 'gatsby';
import styled from '@emotion/styled';

import Logo from './Logo';
import { PrimaryBtn } from './styled/Button';
import {
  backgroundColor,
  navLinkColor,
  secondaryColor,
  secondaryColorHover,
} from '../utils/global/colorscheme';
import { rhythm } from '../utils/global/typography';
// import mq from '../utils/global/breakpoints'

const NavCSS = styled.nav`
  display: flex;
  max-height: 3.3rem;
  padding-top: 1rem;
  width: 100%;
  margin-bottom: 1rem;
  z-index: 3;
  position: absolute;
  background-color: ${backgroundColor};

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

  @media (max-width: 620px) {
    flex-direction: column;
    max-height: fit-content;
  }
`;

const LeftDiv = styled.div`
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

  @media (max-width: 850px) {
    li {
      font-size: ${rhythm(0.55)};
      padding-right: ${rhythm(0.35)};
    }
  }

  @media (max-width: 620px) {
    margin: 0.5rem;
  }
`;

const CenterDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 620px) {
    height: 0.1rem;
    order: -1;
  }
`;

const LogoDiv = styled.div`
  margin-top: 0.5rem;
  max-height: 65px;
  max-width: 65px;
  border: none;
  margin: 0.8rem 0;

  a {
    text-decoration: none;
  }

  @media (max-width: 620px) {
    height: 0.2rem;
  }
`;

const RightDiv = styled.div`
  @media (max-width: 800px) {
    button {
      font-size: ${rhythm(0.5)};
    }
  }

  @media (max-width: 620px) {
    button {
      display: none;
    }
  }
`;

const NavBar = () => {
  return (
    <NavCSS>
      <LeftDiv>
        <ul>
          <Link to="/learn">
            <li>Learn</li>
          </Link>
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
      </LeftDiv>
      <CenterDiv>
        <LogoDiv>
          <Link to="/">
            <Logo />
          </Link>
        </LogoDiv>
      </CenterDiv>
      <RightDiv>
        <Link to="/ceremonies">
          <PrimaryBtn variant="primary">Book a Session</PrimaryBtn>
        </Link>
      </RightDiv>
    </NavCSS>
  );
};

export default NavBar;
