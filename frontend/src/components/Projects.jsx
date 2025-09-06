import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import { FiGithub, FiExternalLink } from 'react-icons/fi';

// Os styled-components continuam os mesmos, exceto pelo DeleteButton que foi removido.
const Section = styled.section`
  padding: 100px 0;
  text-align: center;
`;
const SectionTitle = styled.h2`
  font-size: 2rem;
  font-weight: bold;
  color: #CCD6F6;
  margin-bottom: 3rem;
  position: relative;
  display: inline-block;

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
const ProjectsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 1.5rem;
  max-width: 1100px;
  margin: 0 auto;
  padding: 0 1rem;
`;
const ProjectCard = styled.div`
  background: #112240;
  border-radius: 8px;
  padding: 2rem;
  text-align: left;
  transition: all 0.3s ease;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  position: relative;

  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 10px 30px -15px rgba(2,12,27,0.7);
  }
`;
const ProjectLinks = styled.div`
  position: absolute;
  top: 1.5rem;
  right: 1.5rem;
  display: flex;
  gap: 1rem;
`;
const IconLink = styled.a`
  color: #8892B0;
  font-size: 1.25rem;
  transition: color 0.3s ease;
  &:hover {
    color: #64FFDA;
  }
`;
const ProjectTitle = styled.h3`
  font-size: 1.25rem;
  font-weight: bold;
  color: #CCD6F6;
  margin-bottom: 1rem;
`;
const ProjectDescription = styled.p`
  font-size: 0.9rem;
  color: #8892B0;
  margin-bottom: 1.5rem;
  flex-grow: 1;
`;
const TechList = styled.ul`
  list-style: none;
  padding: 0;
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  font-family: 'Roboto Mono', monospace;
  font-size: 0.8rem;
  color: #8892B0;
`;

const Projects = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
axios.get(`${import.meta.env.VITE_API_URL}/api/projects`)      .then(response => { setProjects(response.data); })
      .catch(error => { console.error("Houve um erro ao buscar os projetos:", error); });
  }, []);

  // A função handleDelete foi REMOVIDA daqui.

  return (
    <Section id="projects">
      <SectionTitle>Meus Projetos</SectionTitle>
      <ProjectsGrid>
        {projects.map(project => (
          <ProjectCard key={project.id}>
            <div>
              <ProjectLinks>
                {project.githubUrl && (<IconLink href={project.githubUrl} target="_blank" rel="noopener noreferrer"><FiGithub /></IconLink>)}
                {project.liveUrl && (<IconLink href={project.liveUrl} target="_blank" rel="noopener noreferrer"><FiExternalLink /></IconLink>)}
              </ProjectLinks>
              <ProjectTitle>{project.title}</ProjectTitle>
              <ProjectDescription>{project.description}</ProjectDescription>
            </div>
            <TechList>
              {project.technologies.split(',').map(tech => <li key={tech}>{tech}</li>)}
            </TechList>
            { }
          </ProjectCard>
        ))}
      </ProjectsGrid>
    </Section>
  );
};

export default Projects;