import styled from '@emotion/styled';

import {
  backgroundColor,
  darkAccentColor,
} from '../../utils/global/colorscheme';

type SectionContainerProps = {
  marginTop?: boolean;
};

type SectionWrapperProps = {
  noCols?: boolean;
};

export const SectionContainer = styled.section<SectionContainerProps>`
  background-color: ${backgroundColor};
  width: 100%;
  padding: 5rem 4rem;
  text-align: center;
  z-index: 2;
  margin-top: ${({ marginTop }) => (marginTop ? '5rem' : null)};
`;

export const SectionContentWrapper = styled.div<SectionWrapperProps>`
  display: grid;
  grid-template-columns: ${({ noCols }) => (noCols ? null : '1fr 1fr')};

  h2 {
    margin: auto;
  }

  p {
    margin: auto;
  }
`;

export const SectionHeader = styled.div`
  max-height: 100px;
  min-height: 100px;
  width: 100%;
  display: flex;
  justify-content: center;
  background-color: ${darkAccentColor};
`;
