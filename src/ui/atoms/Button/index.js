import { rem } from 'polished';
import styled from 'styled-components';

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

  &:nth-of-type(1) {
    font-size: ${rem(25)};
  }
`;

Button.displayName = 'Button';

export default Button;
