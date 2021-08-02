import { rem } from 'polished';
import styled, { css } from 'styled-components';

const Button = styled.button`
  background: none;
  border: none;
  height: ${rem(50)};
  margin-left: ${rem(10)};

  &:active {
    transform: none;
  }

  &:hover {
    border-bottom: ${rem(5)} solid ${({ theme }) => theme.colors.deepSkyBlue};
    color: ${({ theme }) => theme.colors.jet};
    cursor: pointer;
    height: ${rem(45)};
    margin-bottom: ${rem(-5)};
  }

  ${({ order }) =>
    order &&
    css`
      font-size: ${rem(25)};
    `};

  ${({ remove }) =>
    remove &&
    css`
      height: ${rem(20)};

      &:hover {
        border-bottom: none;
        color: ${({ theme }) => theme.colors.jet};
        cursor: pointer;
        height: auto;
      }
    `};
`;

Button.displayName = 'Button';

export default Button;
