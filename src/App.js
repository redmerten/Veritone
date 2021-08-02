import React from 'react';
import styled, { ThemeProvider } from 'styled-components';

// import { GlobalStyle } from './config/styling';
import theme from './config/theme';

import OrderedList from './OrderedList';

import Title from './ui/atoms/Title';

// import './App.css';

const MainDiv = styled.div`
  margin: 5%;
  width: 40%;
`;

function App() {
  return (
    <ThemeProvider theme={theme}>
      <MainDiv>
        <Title>Veritone Challenge</Title>
        <hr />
        <OrderedList />
      </MainDiv>
    </ThemeProvider>
  );
}

export default App;
