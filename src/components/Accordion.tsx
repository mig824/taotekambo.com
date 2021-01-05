import React, {
  useState,
  useEffect,
  useRef,
  FunctionComponent,
  ReactElement,
} from 'react';
import { AiOutlineRight } from 'react-icons/ai';
import styled from '@emotion/styled';
import {
  backgroundColor,
  mainTextColor,
  secondaryColor,
  secondaryColorHover,
} from '../utils/style/colorscheme';
import { desktop1200, tabletPortrait768 } from '../utils/style/breakpoints';
import { rhythm } from '../utils/style/typography';

const AccordionSection = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 1rem;
`;

type AccordionTitleProps = {
  bgColor?: string;
};

const AccordionTitle = styled.button<AccordionTitleProps>`
  background-color: ${({ bgColor }) => (bgColor ? bgColor : backgroundColor)};
  color: ${mainTextColor};
  cursor: pointer;
  margin-top: -1rem;
  display: flex;
  border: none;
  outline: none;
  transition: background-color 0.6s ease;
  padding: 0.5rem 0;

  &:hover,
  .active {
    color: ${secondaryColorHover};
  }

  .title {
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

  ${tabletPortrait768} {
    .title {
      font-size: ${rhythm(0.7)};
    }
  }

  ${desktop1200} {
    .title {
      font-size: ${rhythm(0.85)};
    }
  }
`;

type AccordionContentProps = {
  bgColor?: string;
};

const AccordionContent = styled.div<AccordionContentProps>`
  background-color: ${({ bgColor }) => (bgColor ? bgColor : backgroundColor)};
  overflow: hidden;
  transition: max-height 0.6s ease;

  .accordion-text {
    font-weight: 400;
    padding: 1rem;
  }
`;

type AccordionProps = {
  children: ReactElement;
  title: string;
  bgColor?: string;
};

const Accordion: FunctionComponent<AccordionProps> = ({
  children,
  title,
  bgColor,
}) => {
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
      <AccordionTitle
        onClick={toggleActive}
        bgColor={bgColor ? bgColor : backgroundColor}
      >
        <p className="title">{title}</p>
        <span className={active ? 'accordion-icon rotate' : 'accordion-icon'}>
          <AiOutlineRight />
        </span>
      </AccordionTitle>
      <AccordionContent
        ref={contentRef}
        bgColor={bgColor ? bgColor : backgroundColor}
      >
        {children}
      </AccordionContent>
    </AccordionSection>
  );
};

export default Accordion;
