import React from 'react';
import { Link } from 'gatsby';
import styled from '@emotion/styled';

import Logo from './Logo';
import { PrimaryBtn } from './styled/Button';
import {
  navLinkColor,
  secondaryColor,
  secondaryColorHover,
} from '../utils/global/colorscheme';

const NavCSS = styled.nav`
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
`;

const CenterDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const LogoDiv = styled.div`
  margin-top: 0.5rem;
  max-height: 65px;
  max-width: 65px;
  border: none;
`;

const NavBar = () => (
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
    <div className="right-div">
      <Link to="/ceremonies">
        <PrimaryBtn variant="primary">Book a Session</PrimaryBtn>
      </Link>
    </div>
  </NavCSS>
);

export default NavBar;
