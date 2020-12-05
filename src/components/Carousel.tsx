/** @jsx jsx */
import React, { useState, useRef, useEffect } from 'react';
import { jsx, css } from '@emotion/react';
import { FaAngleLeft, FaAngleRight } from 'react-icons/fa';

import Testimonial from './Testimonial';
import { secondaryColor } from '../utils/styles/colorscheme';

const Carousel = ({ testimonialData }) => {
  const containerRef = useRef<HTMLInputElement>(null);
  const [count, setCount] = useState(0);
  const [nextSlide, setNextSlide] = useState(false);
  const [{ width }, setDimensions] = useState({ height: 0, width: 0 });

  useEffect(() => {
    const dimensions = {
      height: containerRef.current.getBoundingClientRect().height,
      width: containerRef.current.getBoundingClientRect().width,
    };

    setDimensions(dimensions);
  }, []);

  const carouselCSS = css`
    position: relative;
    width: 100%;

    .carousel-container {
      max-width: 60vw;
      margin: auto;
      overflow: hidden;
      position: relative;
      display: flex;
    }

    .carousel-slide {
      display: flex;
      flex-wrap: wrap;
      min-width: ${width}px;
      height: 500px;
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

    .prev-btn {
      position: absolute;
      top: 50%;
      z-index: 10;
      left: 4rem;
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
    }
    .next-btn {
      position: absolute;
      top: 50%;
      z-index: 10;
      right: 4rem;
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
    }
  `;

  return (
    <div css={carouselCSS}>
      <button
        className="prev-btn"
        onClick={() => {
          if (count <= 0) return;
          setNextSlide(true);
          setCount(count - 1);
        }}
      >
        <FaAngleLeft />
      </button>
      <div
        className="carousel-container"
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
          testimonial={testimonialData[testimonialData.length - 1].node}
          key={`${testimonialData[testimonialData.length - 1].node.id}-clone`}
          position="first"
        />
        {testimonialData?.map(({ node }) => {
          return (
            <Testimonial testimonial={node} key={node.id} position="middle" />
          );
        })}
        <Testimonial
          testimonial={testimonialData[0].node}
          key={`${testimonialData[0].node.id}-clone`}
          position="last"
        />
      </div>
      <button
        className="next-btn"
        onClick={() => {
          if (count > testimonialData.length) return;
          setNextSlide(true);
          setCount(count + 1);
        }}
      >
        <FaAngleRight />
      </button>
    </div>
  );
};

export default Carousel;
