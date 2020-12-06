import styled from '@emotion/styled';

import {
  primaryColor,
  secondaryColor,
  primaryColorHover,
  secondaryColorHover,
  backgroundColor,
} from './colorscheme';

export const SectionContainer = styled.section`
  background-color: ${backgroundColor};
  width: 100%;
  padding: 5rem 4rem;
  text-align: center;
  z-index: 2;
`;

export const SectionContentWrapper = styled.div`
  display: grid;
  grid-template-columns: ${(props) => (props.noCols ? null : '1fr 1fr')};

  h2 {
    margin: auto;
  }

  p {
    margin: auto;
  }
`;

export const PrimaryBtn = styled.button`
  border-radius: 5px;
  border: transparent 1px solid;
  background-color: ${primaryColor};
  color: ${secondaryColor};
  padding: 0.2rem 0.65rem;
  margin-top: ${({ marginTop }) => (marginTop ? '2rem' : null)};

  &:hover {
    background-color: ${primaryColorHover};
    color: ${secondaryColorHover};
    cursor: pointer;
  }

  &:focus {
    outline: none;
  }

  &:active {
    border: solid 1px ${secondaryColor};
  }
`;

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

export const ContentWrapper = styled.div`
  display: flex;
`;
