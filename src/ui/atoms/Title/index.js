// @flow

import { rem } from 'polished';
import styled from 'styled-components';

const Title = styled.h1.attrs({ 'data-testid': 'atom-title' })`
  color: ${({ theme }) => theme.colors.jet};
  font-size: ${rem(20)};
  font-weight: 500;
  margin: 0;
`;

Title.displayName = 'Title';

export default Title;
