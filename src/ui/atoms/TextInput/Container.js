// @flow

import { rem } from 'polished';
import styled, { css } from 'styled-components';

export default styled.div`
  align-items: center;
  background-color: ${({ theme }) => theme.colors.antiFlashWhite};
  border: ${({ theme }) => theme.colors.antiFlashWhite} solid ${rem(2)};
  border-radius: ${rem(4)};
  cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'initial')};
  display: flex;
  min-height: ${rem(38)};
  padding: 0 ${({ theme }) => rem(theme.spacing.md)};
  transition: all 0.25s ${({ theme }) => theme.timing.easeOutCirc};
  width: 100%;

  &:hover {
    background-color: ${({ theme }) => theme.colors.azureishWhite};
    border-color: ${({ theme }) => theme.colors.azureishWhite};
  }

  &:focus-within {
    background-color: ${({ theme }) => theme.colors.white};
    border-color: ${({ theme }) => theme.colors.gainsboro};
  }

  & input:-webkit-autofill {
    box-shadow: inset 0 0 0px 9999px ${({ theme }) => theme.colors.antiFlashWhite};

    &:hover {
      box-shadow: inset 0 0 0px 9999px ${({ theme }) => theme.colors.azureishWhite};
    }

    &:focus {
      box-shadow: inset 0 0 0px 9999px ${({ theme }) => theme.colors.white};
    }
  }

  ${({ type }) =>
    type &&
    type === 'number' &&
    css`
      padding-right: ${({ theme }) => rem(theme.spacing.sm)};
    `};

  ${({ small, theme }) =>
    small &&
    css`
      display: inline-flex;
      height: ${rem(32)};
      padding: 0 ${rem(theme.spacing.sm)};
      width: auto !important;

      /* stylelint-disable-next-line no-descending-specificity */
      input {
        width: ${rem(32)};
      }
    `};
`;
