import styled from '@emotion/styled';

export const MainContainerCSS = styled.main`
  margin: auto;
  max-width: 100%;
  min-height: 100%;
  padding: 0 1.0875rem 1.45rem;
`;

export const SectionCSS = styled.section``;

export const ImgContainer = styled.div`
  min-width: 100%;
  max-height: 25vh;
  margin-bottom: 1.45rem;
  overflow-y: hidden;
  z-index: -1;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  &::after {
    background-size: cover;
    transform: translateZ(-1px) scale(1.8);
    min-height: 100%;
    z-index: -2;
  }
`;

export const ParallaxImg = styled.div`
  position: relative;
  min-height: 50vh;
  width: 100%;
  transform-style: inherit;
  z-index: -1;

  &::after {
    content: '';
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    display: block;
    background-size: cover;
    background: url(https://picsum.photos/g/1921/1081?random) top center;
    transform: translateZ(-1px) scale(2);
    min-height: 100%;
    z-index: -2;
  }
`;
