import React from 'react';
import styled from 'styled-components';

const Section = styled.section`
  padding: 100px 0;
  text-align: center;
  max-width: 600px;
  margin: 0 auto;
`;

const SectionTitle = styled.h2`
  font-size: 1.5rem; /* Um pouco menor para esta seção */
  font-weight: bold;
  color: #64FFDA; /* Ciano Neon */
  font-family: 'Roboto Mono', monospace;
  margin-bottom: 1rem;
`;

const ContactTitle = styled.h3`
  font-size: clamp(30px, 5vw, 50px);
  color: #CCD6F6;
  font-weight: bold;
  margin-bottom: 1.5rem;
`;

const ContactParagraph = styled.p`
  color: #8892B0;
  margin-bottom: 2.5rem;
  line-height: 1.6;
`;

const ContactButton = styled.a`
  color: #64FFDA;
  background-color: transparent;
  border: 1px solid #64FFDA;
  border-radius: 4px;
  padding: 1rem 1.75rem;
  font-size: 1rem;
  font-family: 'Roboto Mono', monospace;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background-color: rgba(100, 255, 218, 0.1);
  }
`;

const Contact = () => {
  return (
    <Section id="contact">
      <SectionTitle>03. Qual o próximo passo?</SectionTitle>
      <ContactTitle>Entre em Contato</ContactTitle>
      <ContactParagraph>
        Estou sempre em busca de novos desafios e oportunidades para colaborar em projetos interessantes. Se você tem uma proposta ou apenas quer trocar uma ideia, minha caixa de entrada está sempre aberta!
      </ContactParagraph>
      <ContactButton href="mailto:eddievan.matos@gmail.com"> {/* <<-- TROQUE SEU E-MAIL AQUI */}
        Diga Olá
      </ContactButton>
    </Section>
  );
};

export default Contact;