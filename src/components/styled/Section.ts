import styled from '@emotion/styled';

import {
  backgroundColor,
  darkAccentColor,
} from '../../utils/style/colorscheme';
import { tabletPortrait768, desktop1200 } from '../../utils/style/breakpoints';

type SectionContainerProps = {
  marginTop?: string;
  bgColor?: string;
  noPadding?: boolean;
};

export const SectionContainer = styled.section<SectionContainerProps>`
  background-color: ${({ bgColor }) => (bgColor ? bgColor : backgroundColor)};
  width: 100%;
  padding: 2em 3em;
  text-align: center;
  z-index: 2;
  margin-top: ${({ marginTop }) => (marginTop ? marginTop : null)};

  ${tabletPortrait768} {
    padding: ${({ noPadding }) => (noPadding ? null : `5em 4em`)};
  }
`;

type SectionWrapperProps = {
  noCols?: boolean;
};

export const SectionContentWrapper = styled.div<SectionWrapperProps>`
  display: grid;
  grid-template-columns: 1fr;

  .change-order {
    margin-bottom: 1rem;
    order: -1;
  }

  p {
    margin: auto;
  }

  ${tabletPortrait768} {
    max-width: 70vw;
    margin: auto;
    grid-template-columns: ${({ noCols }) => (noCols ? null : '1fr 1fr')};
    column-gap: 2em;

    .change-order {
      margin: auto;
      order: 0;
    }
  }

  ${desktop1200} {
    max-width: 70vw;
    margin: auto;
  }
`;

type SectionHeaderProps = {
  bgColor?: string;
};

export const SectionHeader = styled.div<SectionHeaderProps>`
  max-height: 100px;
  min-height: 100px;
  width: 100%;
  display: flex;
  justify-content: center;
  background-color: ${({ bgColor }) => (bgColor ? bgColor : darkAccentColor)};
  z-index: 2;
`;
