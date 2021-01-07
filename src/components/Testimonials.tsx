/** @jsx jsx */
import _React, { useState, useRef, useEffect } from 'react';
import { jsx, css } from '@emotion/react';
import styled from '@emotion/styled';
import { FaAngleLeft, FaAngleRight } from 'react-icons/fa';

import Testimonial from './Testimonial';
import { secondaryColor, primaryColor } from '../utils/style/colorscheme';
import { tabletPortrait768 } from '../utils/style/breakpoints';

const SlideContainer = styled.div`
  width: 90vw;
  max-width: 60em;
  margin: auto;
  overflow: hidden;
  position: relative;
  display: flex;

  ${tabletPortrait768} {
    width: 70vw;
  }
`;

const PrevBtn = styled.button`
  position: absolute;
  top: 50%;
  z-index: 10;
  left: 0;
  font-size: 2rem;
  color: #fff;
  opacity: 0.8;
  cursor: pointer;
  background: transparent;
  border: none;
  outline: none;

  &:hover {
    opacity: 1;
  }

  ${tabletPortrait768} {
    left: 4rem;
  }
`;

const NextBtn = styled.button`
  position: absolute;
  top: 50%;
  z-index: 10;
  right: 0;
  font-size: 2rem;
  color: #fff;
  opacity: 0.8;
  cursor: pointer;
  background: transparent;
  border: none;
  outline: none;

  &:hover {
    opacity: 1;
  }

  ${tabletPortrait768} {
    right: 4rem;
  }
`;

// type ChildNode = {
//   id?: string
// }

const Testimonials = ({ testimonialData }) => {
  const containerRef = useRef<HTMLInputElement>(null);
  const [count, setCount] = useState(0);
  const [nextSlide, setNextSlide] = useState(false);
  const [{ width }, setDimensions] = useState({ height: 0, width: 0 });

  useEffect(() => {
    let { height, width } = containerRef.current.getBoundingClientRect();
    setDimensions({ height, width });
    const handleResize = () => {
      let { height, width } = containerRef.current.getBoundingClientRect();
      setDimensions({ height, width });
    };
    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const dynamicCSS = css`
    position: relative;
    width: 100%;
    background-color: ${primaryColor};

    .testimonial-slide {
      display: flex;
      flex-wrap: wrap;
      min-width: ${width}px;
      /* height: 500px; */
      transition: ${nextSlide ? 'transform 1.5s ease-in-out' : 'none'};
      transform: translateX(-${width * count}px);
      padding: 2rem;

      img {
        border-radius: 50%;
      }

      small {
        align-self: center;
        margin-left: 1.5rem;
        color: ${secondaryColor};
        font-size: 0.8rem;
      }
    }
  `;

  return (
    <div css={dynamicCSS}>
      <PrevBtn
        onClick={() => {
          if (count <= 0) return;
          setNextSlide(true);
          setCount(count - 1);
        }}
      >
        <FaAngleLeft />
      </PrevBtn>
      <SlideContainer
        ref={containerRef}
        onTransitionEnd={() => {
          const slideNode = containerRef?.current?.childNodes[count];
          if (slideNode.id === 'last-clone') {
            setCount(1);
            setNextSlide(false);
          }
          if (slideNode.id === 'first-clone') {
            setCount(testimonialData.length);
            setNextSlide(false);
          }
        }}
      >
        <Testimonial
          testimonial={testimonialData[testimonialData.length - 1].remarkNode}
          key={`${
            testimonialData[testimonialData.length - 1].remarkNode.frontmatter
              .id
          }-clone`}
          position="first"
        />
        {testimonialData?.map(({ remarkNode }) => {
          return (
            <Testimonial
              testimonial={remarkNode}
              key={remarkNode.frontmatter.id}
              position="middle"
            />
          );
        })}
        <Testimonial
          testimonial={testimonialData[0].remarkNode}
          key={`${testimonialData[0].remarkNode.frontmatter.id}-clone`}
          position="last"
        />
      </SlideContainer>
      <NextBtn
        onClick={() => {
          if (count > testimonialData.length) return;
          setNextSlide(true);
          setCount(count + 1);
        }}
      >
        <FaAngleRight />
      </NextBtn>
    </div>
  );
};

export default Testimonials;
