import React from 'react';
import styled from 'styled-components';

const HeroSection = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 90vh;
  text-align: center;
  padding: 0 1rem;
`;

const HeroContent = styled.div`
  max-width: 800px;
`;

const PreTitle = styled.p`
  color: #64FFDA; /* Ciano Neon */
  font-family: 'Roboto Mono', monospace; /* Sugestão de fonte tech */
  margin-bottom: 1rem;
`;

const Title = styled.h1`
  color: #CCD6F6; /* Texto claro */
  font-size: clamp(40px, 8vw, 80px); /* Tamanho de fonte responsivo */
  font-weight: bold;
  margin-bottom: 0.5rem;
`;

const SubTitle = styled.h2`
  color: #8892B0; /* Texto secundário */
  font-size: clamp(20px, 5vw, 30px);
  font-weight: bold;
  margin-bottom: 2rem;
`;

const StyledButton = styled.a`
  color: #64FFDA;
  background-color: transparent;
  border: 1px solid #64FFDA;
  border-radius: 4px;
  padding: 0.75rem 1.5rem;
  font-size: 1rem;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background-color: rgba(100, 255, 218, 0.1);
  }
`;

const Hero = () => {
  return (
    <HeroSection id="hero">
      <HeroContent>
        <PreTitle>Olá, meu nome é</PreTitle>
        <Title>Eddie</Title> {/* <<-- Altere para o seu nome */}
        <SubTitle>Eu desenvolvo soluções para a web.</SubTitle>
        <StyledButton href="#projects">
          Conheça meus projetos
        </StyledButton>
      </HeroContent>
    </HeroSection>
  );
};

export default Hero;