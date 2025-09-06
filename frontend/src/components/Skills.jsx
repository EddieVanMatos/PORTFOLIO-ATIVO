import React from 'react';
import styled from 'styled-components';
import { FaReact, FaNodeJs, FaJava } from 'react-icons/fa';

import { SiSpringboot } from 'react-icons/si';

const skillsData = [
  { name: 'React', icon: <FaReact /> },
  { name: 'Node.js', icon: <FaNodeJs /> },
  { name: 'Java', icon: <FaJava /> },
  { name: 'Spring Boot', icon: <SiSpringboot /> }, 
];


const Section = styled.section`
  padding: 100px 0;
  background-color: #0A192F; /* Fundo igual ao body para transição suave */
`;

const SectionTitle = styled.h2`
  text-align: center;
  font-size: 2rem;
  font-weight: bold;
  color: #CCD6F6;
  margin-bottom: 3rem;
  position: relative;
  display: inline-block;
  left: 50%;
  transform: translateX(-50%);

  &::after {
    content: '';
    position: absolute;
    width: 60%;
    height: 2px;
    bottom: -10px;
    left: 20%;
    background-color: #64FFDA;
  }
`;

const SkillsGrid = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  grid-template-columns: repeat(auto-fill, minmax(120px, 1fr));
  gap: 2rem;
  max-width: 800px;
  margin: 0 auto;
  padding: 0 1rem;
`;

const SkillCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 0.75rem;
  color: #8892B0;
  transition: all 0.3s ease;

  svg {
    font-size: 3rem;
  }

  p {
    font-family: 'Roboto Mono', monospace;
    font-size: 0.9rem;
  }

  &:hover {
    color: #64FFDA;
    transform: translateY(-5px);
  }
`;


const Skills = () => {
  return (
    <Section id="skills">
      <SectionTitle>Habilidades</SectionTitle>
      <SkillsGrid>
        {skillsData.map(skill => (
          <SkillCard key={skill.name}>
            {skill.icon}
            <p>{skill.name}</p>
          </SkillCard>
        ))}
      </SkillsGrid>
    </Section>
  );
};

export default Skills;