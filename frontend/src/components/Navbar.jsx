import React from 'react';
import styled from 'styled-components';

const Nav = styled.nav`
  background: rgba(10, 25, 47, 0.5);
  backdrop-filter: blur(10px);
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 10;
`;

const NavContainer = styled.div`
  container;
  margin: 0 auto;
  padding: 1rem 1.5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Logo = styled.h1`
  font-size: 1.25rem;
  font-weight: bold;
  color: #64FFDA; /* Ciano Neon */
`;

const NavLinks = styled.ul`
  display: flex;
  gap: 1.5rem;
  color: #CCD6F6; /* Texto claro */

  a {
    transition: color 0.3s ease;
    &:hover {
      color: #64FFDA; /* Ciano Neon */
    }
  }
`;

const Navbar = () => {
  return (
    <Nav>
      <NavContainer>
        <Logo>Meu Portfólio</Logo>
        <NavLinks>
          <li><a href="#projects">Projetos</a></li>
          <li><a href="#skills">Habilidades</a></li>
          <li><a href="#contact">Contato</a></li>
        </NavLinks>
      </NavContainer>
    </Nav>
  );
};

export default Navbar;