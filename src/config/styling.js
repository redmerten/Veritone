// @flow

import { rgba, rem } from "polished";
import { createGlobalStyle, css } from "styled-components";

export function boxShadow() {
  return css`
    box-shadow: ${({ theme }) => rgba(theme.colors.black, 0.1)} 0 ${rem(4)}
      ${rem(16)};
  `;
}

export const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
  }

  html {
    line-height: 1.5;
  }

  body {
    background-color: ${p => p.theme.colors.antiFlashWhite};
    color: ${p => p.theme.colors.independence};
    font-family: ${p => p.theme.fonts.roboto};
    margin: 0;
  }

  html, main, #body, #root {
    min-height: 100vh !important;
  }
`;
