import React, { FC, useState, useEffect } from 'react';
import styled from '@emotion/styled';
import { FaArrowCircleUp } from 'react-icons/fa';
import { mainTextColor } from '../utils/style/colorscheme';
import { desktop1200 } from '../utils/style/breakpoints';

const ScrollUpBtn = styled.button<{ showScroll: boolean }>`
  display: ${({ showScroll }) => (showScroll ? `flex` : `none`)};
  position: fixed;
  width: 4rem;
  height: 4rem;
  right: 4%;
  bottom: 4%;
  align-items: center;
  justify-content: center;
  z-index: 10;
  cursor: pointer;
  animation: fadeIn 0.5s;
  transition: opacity 0.6s ease-in-out;
  opacity: 0.5;
  color: ${mainTextColor};
  background-color: transparent;
  border: none;

  &:hover {
    opacity: 1;
  }

  @keyframes fadeIn {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 0.5;
    }
  }

  svg {
    width: 3rem;
    height: 3rem;
  }

  ${desktop1200} {
    width: 3rem;
    height: 3rem;
  }
`;

const ScrollTopArrow: FC<{ showBelow?: number }> = ({ showBelow = 400 }) => {
  const [showScroll, setShowScroll] = useState<boolean>(false);

  useEffect(() => {
    window.addEventListener('scroll', checkScrollTop);
    return () => {
      window.removeEventListener('scroll', checkScrollTop);
    };
  });
  const checkScrollTop = () => {
    if (!showScroll && window.pageYOffset > showBelow) {
      setShowScroll(true);
    } else if (showScroll && window.pageYOffset <= showBelow) {
      setShowScroll(false);
    }
  };

  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };
  return (
    <ScrollUpBtn onClick={scrollTop} showScroll={showScroll}>
      <FaArrowCircleUp />
    </ScrollUpBtn>
  );
};

export default ScrollTopArrow;
