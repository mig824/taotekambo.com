import styled from '@emotion/styled';

import {
  primaryColor,
  secondaryColor,
  primaryColorHover,
  secondaryColorHover,
  backgroundColor,
} from '../../utils/style/colorscheme';

type PrimaryBtnProps = {
  margin?: string;
  variant: string;
};

export const PrimaryBtn = styled.button<PrimaryBtnProps>`
  border-radius: 5px;
  border: transparent 1px solid;
  background-color: ${({ variant }) =>
    variant === 'primary' ? primaryColor : backgroundColor};
  color: ${secondaryColor};
  padding: 0.2rem 0.65rem;
  margin: ${({ margin }) => (margin ? margin : null)};
  transition: background-color ease-in-out 300ms, color ease-in-out 300ms;

  &:hover {
    background-color: ${({ variant }) =>
      variant === 'primary' ? primaryColorHover : null};
    color: ${({ variant }) =>
      variant === 'primary' ? secondaryColorHover : secondaryColor};
    cursor: pointer;
    border: 1px solid
      ${({ variant }) =>
        variant === 'secondary' ? secondaryColor : 'transparent'};
  }

  &:focus {
    outline: none;
  }

  &:active {
    border: solid 1px
      ${({ variant }) =>
        variant === 'primary' ? secondaryColorHover : backgroundColor};
  }
`;
