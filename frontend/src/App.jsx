import React from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import Navbar from './components/navbar';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact'; 

const GlobalStyle = createGlobalStyle`
  html {
    scroll-behavior: smooth; /* Adiciona scroll suave para os links da navbar */
  }

  body {
    background-color: #0A192F;
    color: #CCD6F6;
    font-family: sans-serif;
    margin: 0;
  }

  a {
    text-decoration: none;
    color: inherit;
  }
`;

const AppContainer = styled.div`
  min-height: 100vh;
`;

const MainContent = styled.main``;


function App() {
  return (
    <>
      <GlobalStyle />
      <AppContainer>
        <Navbar />
        <MainContent>
          <Hero />
          <Projects />
          <Skills />
          <Contact /> {/* <-- 2. ADICIONAR */}
        </MainContent>
      </AppContainer>
    </>
  )
}

export default App;