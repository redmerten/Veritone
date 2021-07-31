import React from 'react';
import styled, { ThemeProvider } from 'styled-components';

import { GlobalStyle } from './config/styling';
import theme from './config/theme';

import List from './List';

import Title from './ui/atoms/Title';

import './App.css';

const MainDiv = styled.div`
  /* align-items: ; */
  /* display:flex; */
  margin: 5%;
  width: 30%;
`;

function App() {
  return (
    <ThemeProvider theme={theme}>
      <MainDiv>
        <Title>Veritone Challenge</Title>
        <hr />
        <List />
      </MainDiv>
    </ThemeProvider>
  );
}

export default App;
