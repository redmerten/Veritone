// @flow

import { rem } from 'polished';
import styled, { css } from 'styled-components';

import { ReactComponent } from './reset.svg';

export default styled(ReactComponent)`
  cursor: pointer;
  height: ${rem(24)};
  width: ${rem(24)};

  path {
    fill: ${({ theme }) => theme.colors.ashGrey};
  }

  /* stylelint-disable no-descending-specificity */
  &:hover path {
    fill: ${({ theme }) => theme.colors.grayBlue};
  }

  ${({ disabled, theme }) =>
    disabled &&
    css`
      cursor: default;
      path {
        fill: ${theme.colors.gainsboro} !important;
      }
    `};
`;
