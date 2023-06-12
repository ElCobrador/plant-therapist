import React, { Suspense } from 'react';
import './App.css';
import { ThemeProvider, createGlobalStyle } from 'styled-components';
import NavBar from './Components/Navbar';
import { Route, Routes } from 'react-router-dom';
import { HeroPage } from './Pages/HeroPage';
import { PlantsPage } from './Pages/PlantsPage';
import { ProfilePage } from './Pages/ProfilePage';
import { PathNotFoundPage } from './Pages/PathNotFoundPage';
import { PlantDetailPage } from './Pages/PlantDetailPage';

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

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <NavBar />
      <Suspense fallback={<div className="container">Loading ...</div>}>

        <Routes>
          <Route path="/" element={<HeroPage />} />
          <Route path="/plants" element={<PlantsPage />} />
          <Route path="/profile" element={<ProfilePage />} />

          {/* Look into how use the route parameter to load the object. */}
          <Route path="/plant/:plantId" element={<PlantDetailPage />} />
          <Route path="*" element={<PathNotFoundPage />} />
        </Routes>
      </Suspense>
      {/* <HeroStory /> */}

    </ThemeProvider>
  );
}

export default App;