// @flow

import { rem } from 'polished';
import styled, { css } from 'styled-components';

const Input = styled.input.attrs(({ dataTestid: dataTestId = 'atom-input', placeholder = '', type = 'text' }) => ({
  'data-testid': dataTestId,
  type,
  placeholder,
}))`
  appearance: textfield;
  background: none;
  border: 0;
  color: ${({ theme }) => theme.colors.raisinBlack};
  cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'initial')};
  font-family: ${({ theme }) => theme.fonts.roboto};
  font-size: ${rem(12)};
  font-weight: 400;
  margin: 0;
  outline: 0;
  padding: 0;
  width: inherit;

  &:-webkit-autofill {
    box-shadow: inset 0 0 0px 9999px ${({ theme }) => theme.colors.antiFlashWhite};
  }

  &::placeholder {
    color: ${({ theme }) => theme.colors.grayBlue};
  }

  &:disabled {
    color: ${({ theme }) => theme.colors.ashGrey} !important;
  }

  ${(p) =>
    p.large &&
    css`
      font-size: ${rem(16)};
      padding: ${rem(p.theme.spacing.md)} 0;
    `};
`;

Input.displayName = 'Input';

export default Input;
