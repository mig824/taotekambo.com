import React, { useState, useEffect, useRef } from 'react';
import { AiOutlineRight } from 'react-icons/ai';
import styled from '@emotion/styled';
import {
  backgroundColor,
  mainTextColor,
  secondaryColor,
  secondaryColorHover,
} from '../utils/global/colorscheme';

const AccordionSection = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 1rem;
`;

const AccordionTitle = styled.button`
  background-color: ${backgroundColor};
  color: ${mainTextColor};
  cursor: pointer;
  display: flex;
  justify-content: flex-start;
  border: none;
  outline: none;
  transition: background-color 0.6s ease;

  &:hover,
  .active {
    color: ${secondaryColorHover};
  }

  .title {
    font-size: large;
    font-weight: 500;
    color: ${secondaryColor};

    &:hover {
      color: ${secondaryColorHover};
    }
  }

  .accordion-icon {
    transition: transform 0.6s ease;
  }

  .rotate {
    transform: rotate(90deg);
  }
`;

const AccordionContent = styled.div`
  background-color: ${backgroundColor};
  overflow: hidden;
  transition: max-height 0.6s ease;

  .accordion-text {
    font-weight: 400;
    padding: 1rem;
  }
`;

const Accordion = ({ children, title }) => {
  const [active, setActive] = useState(false);
  const contentRef = useRef(null);

  useEffect(() => {
    contentRef.current.style.maxHeight = active
      ? `${contentRef.current.scrollHeight}px`
      : '0px';
  }, [contentRef, active]);

  const toggleActive = () => {
    setActive(!active);
  };

  return (
    <AccordionSection>
      <AccordionTitle onClick={toggleActive}>
        <p className="title">{title}</p>
        <span className={active ? 'accordion-icon rotate' : 'accordion-icon'}>
          <AiOutlineRight />
        </span>
      </AccordionTitle>
      <AccordionContent ref={contentRef}>{children}</AccordionContent>
    </AccordionSection>
  );
};

export default Accordion;
