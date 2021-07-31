// @flow

import { rem } from 'polished';
import styled, { css } from 'styled-components';

const Label = styled.label.attrs({ 'data-testid': 'atom-label' })`
  align-self: center;
  color: ${({ theme }) => theme.fonts.independence};
  font-family: 'roboto mono', monospace;
  font-size: ${rem(12)};
  font-weight: 500;
  letter-spacing: ${rem(0.43)};
  opacity: 0.75;
  padding-left: ${rem(4)};
  text-transform: uppercase;

  ${({ bold }) =>
    bold &&
    css`
      font-weight: 600;
    `}
`;

Label.displayName = 'Label';

export default Label;
