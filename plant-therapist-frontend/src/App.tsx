import React from 'react';
import './App.css';
import { ThemeProvider, createGlobalStyle } from 'styled-components';
import NavBar from './Components/Navbar';
import HeroStory from './Stories/HeroStory';

const theme = {
  colors: {
    background: '#FFFFFF',
    backgroundSecondary: '#3B3B3B',
    caption: '#858584',
    text: '#FFFFFF',
    callToAction: '#A259FF',
    blueAccent: '#377DF7',
    redAccent: '#FF7262'
  }
}

const GlobalStyle = createGlobalStyle`
  body {
    background-color: ${theme.colors.background};
  }
`

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />

      <NavBar />
      <HeroStory />

      <div>
        <div style={{ margin: 'auto', padding: '0% 5%', maxWidth: '1200px' }}>
        </div>
      </div>

    </ThemeProvider>
  );
}

export default App;