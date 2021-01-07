import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'gatsby';
import { AnchorLink } from 'gatsby-plugin-anchor-links';
import styled from '@emotion/styled';

import Logo from './Logo';
import { PrimaryBtn } from './styled/Button';
import {
  backgroundColor,
  darkAccentColor,
  navLinkColor,
  secondaryColor,
  secondaryColorHover,
} from '../utils/style/colorscheme';
import { tabletPortrait768 } from '../utils/style/breakpoints';
import { rhythm } from '../utils/style/typography';
import { AiOutlineDown } from 'react-icons/ai';

const NavCSS = styled.nav`
  display: flex;
  flex-direction: column;
  max-height: fit-content;
  width: 100%;
  padding: 0.5rem 0;
  z-index: 3;
  position: absolute;
  background-color: ${backgroundColor};

  a {
    color: ${navLinkColor};
    text-decoration: none;
    transition: color 0.3s ease-in-out;

    &:hover {
      color: ${secondaryColorHover};
    }
  }

  div {
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: space-around;
  }

  #dropdown {
    display: flex;
    flex-direction: column;
    position: absolute;
    top: 6em;
    width: fit-content;
    min-width: 50px;
    transform: translateX(-38%);
    background-color: ${backgroundColor};
    border: 1px solid ${secondaryColor};
    box-shadow: 0 -3px 6px 1px ${darkAccentColor};
    border-radius: 8px;
    padding: 0 1em;

    a {
      display: flex;
      align-items: center;
      padding: 0.2em 0.5em;
    }

    ${tabletPortrait768} {
      top: 3.9em;
    }
  }

  ${tabletPortrait768} {
    margin-bottom: 1rem;
    flex-direction: row;
  }
`;

const LinksDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding-left: 0.7em;

  ul {
    display: flex;
    list-style: none;
    margin: auto;
    align-items: center;
    color: ${secondaryColor};
  }

  li {
    margin: auto;
    padding-right: 0.6em;
  }

  #learn-link {
    display: flex;
    padding-right: 0.6em;
    align-items: center;

    li {
      margin-right: -0.4em;
      color: ${secondaryColor};

      transition: color 0.3s ease-in-out;
      &:hover {
        color: ${secondaryColorHover};
      }
    }

    &:hover {
      cursor: pointer;
    }
  }

  #arrow-icon {
    font-size: ${rhythm(0.5)};
  }
`;

const LogoDiv = styled.div`
  width: 45px;
  height: 45px;
  max-height: 45px;
  max-width: 45px;
  margin: 0 auto 0.5em auto;
  order: -1;

  a {
    width: 100%;
    height: 100%;
  }

  img {
    padding-top: 1px;
  }

  ${tabletPortrait768} {
    order: 0;
    margin-bottom: 0;
  }
`;

const BtnDiv = styled.div`
  button {
    display: none;
  }

  ${tabletPortrait768} {
    display: flex;
    justify-content: flex-end;

    button {
      display: block;
      font-size: ${rhythm(0.7)};
    }
  }
`;
const useOutsideAlerter = (ref, linkRef, handleClick) => {
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (
        ref.current &&
        !ref.current.contains(e.target) &&
        !linkRef.current.contains(e.target)
      ) {
        handleClick();
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [ref]);
};

/**
 * Component that alerts if you click outside of it
 */
const OutsideAlerter = ({ children, handleClick, learnLinkRef }) => {
  const wrapperRef = useRef(null);
  useOutsideAlerter(wrapperRef, learnLinkRef, handleClick);

  return (
    <div id="dropdown" ref={wrapperRef} onClick={() => handleClick()}>
      {children}
    </div>
  );
};

const DropDownMenu = ({ handleClick, learnLinkRef }) => {
  const DropDownItem = ({ children, to, title }) => {
    return (
      <AnchorLink to={to} title={title} stripHash>
        {children}
      </AnchorLink>
    );
  };

  return (
    <OutsideAlerter learnLinkRef={learnLinkRef} handleClick={handleClick}>
      <DropDownItem to="/learn#kambo" title="Learn about Kambo">
        Kambo
      </DropDownItem>
      <DropDownItem to="/learn#the-science" title="The science about Kambo">
        The Science
      </DropDownItem>
      <DropDownItem to="/learn#how-to-prepare" title="How to prepare for Kambo">
        How To Prepare
      </DropDownItem>
      <DropDownItem to="/learn#faq" title="Frequently asked questions">
        FAQ's
      </DropDownItem>
    </OutsideAlerter>
  );
};

const NavBar = () => {
  const [open, toggleOpen] = useState(false);
  const learnLinkRef = useRef(null);

  return (
    <NavCSS>
      <LinksDiv>
        <ul>
          <div
            id="learn-link"
            ref={learnLinkRef}
            onClick={() => toggleOpen(!open)}
          >
            <li>Learn</li>
            <AiOutlineDown id="arrow-icon" />
          </div>
          {open && (
            <DropDownMenu
              handleClick={() => toggleOpen(!open)}
              learnLinkRef={learnLinkRef}
            />
          )}
          <Link to="/social">
            <li>Social</li>
          </Link>
          <Link to="/shop">
            <li>Shop</li>
          </Link>
          <Link to="/contact">
            <li>Contact</li>
          </Link>
          <Link to="/ceremonies">
            <li>Ceremonies</li>
          </Link>
        </ul>
      </LinksDiv>
      <LogoDiv>
        <Link to="/">
          <Logo />
        </Link>
      </LogoDiv>
      <BtnDiv>
        <Link to="/ceremonies">
          <PrimaryBtn variant="primary">Book a Session</PrimaryBtn>
        </Link>
      </BtnDiv>
    </NavCSS>
  );
};

export default NavBar;
