/** @jsx jsx */
import React, { useState } from 'react';
import { jsx, css } from '@emotion/react';
import { FaAngleLeft, FaAngleRight } from 'react-icons/fa';

const Carousel = () => {
  const [count, setCount] = useState(1);
  const [height, setHeight] = useState(0);
  const [width, setWidth] = useState(0);
  const [nextSlide, setNextSlide] = useState(false);
  const [slideCount, setSlideCount] = useState(5);

  const carouselCSS = css`
    .carousel-container {
      width: 60%;
      margin: auto;
      overflow: hidden;
      position: relative;
    }

    .carousel-slide {
      display: flex;
      width: fit-content;
      height: 500px;
      transition: ${nextSlide ? 'transform 1.5s ease-in-out' : 'none'};
      transform: translateX(-${width * count}px);
    }

    .prev-btn {
      position: absolute;
      top: 50%;
      z-index: 10;
      left: 0.2rem;
      font-size: 1.6rem;
      color: #fff;
      opacity: 0.9;
      cursor: pointer;
      background: transparent;
      border: none;
      outline: none;
    }
    .next-btn {
      position: absolute;
      top: 50%;
      z-index: 10;
      right: 0.2rem;
      font-size: 1.6rem;
      color: #fff;
      opacity: 0.9;
      cursor: pointer;
      background: transparent;
      border: none;
      outline: none;
    }
  `;

  return (
    <div css={carouselCSS}>
      <div
        className="carousel-container"
        ref={(node) => {
          if (node) {
            setHeight(node.getBoundingClientRect().height);
            setWidth(node.getBoundingClientRect().width);
            console.log({ width, height });
          }
        }}
      >
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
        <button
          className="next-btn"
          onClick={() => {
            if (count >= slideCount - 1) return;
            setNextSlide(true);
            setCount(count + 1);
          }}
        >
          <FaAngleRight />
        </button>
        <div
          className="carousel-slide"
          ref={(node) => setSlideCount(node?.childNodes.length)}
          onTransitionEnd={(e) => {
            const children = Array.from(e.currentTarget.childNodes);
            if (children[count].id === 'last-clone') {
              setCount(slideCount - 2);
              setNextSlide(false);
            }
            if (children[count].id === 'first-clone') {
              setCount(slideCount - 4);
              setNextSlide(false);
            }
          }}
        >
          <img
            src="https://cdn.pixabay.com/photo/2016/04/06/13/32/sleeping-1311784_960_720.jpg"
            alt=""
            id="last-clone"
          />
          <img
            src="https://cdn.pixabay.com/photo/2015/06/22/08/40/child-817373_960_720.jpg"
            alt=""
          />
          <img
            src="https://cdn.pixabay.com/photo/2014/04/05/13/05/portrait-317041_960_720.jpg"
            alt=""
          />
          <img
            src="https://cdn.pixabay.com/photo/2016/04/06/13/32/sleeping-1311784_960_720.jpg"
            alt=""
          />
          <img
            src="https://cdn.pixabay.com/photo/2015/06/22/08/40/child-817373_960_720.jpg"
            alt=""
            id="first-clone"
          />
        </div>
      </div>
    </div>
  );
};

export default Carousel;
