import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import { FaTrash } from 'react-icons/fa';

const AdminContainer = styled.div`
  padding: 2rem;
  max-width: 800px;
  margin: 4rem auto;
  background: #112240; /* Um azul um pouco mais claro que o fundo */
  border-radius: 8px;
`;

const Title = styled.h1`
  color: #64FFDA;
  text-align: center;
  margin-bottom: 2rem;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const Input = styled.input`
  padding: 0.75rem;
  background: #0A192F;
  border: 1px solid #233554;
  border-radius: 4px;
  color: #CCD6F6;
  font-size: 1rem;

  &:focus {
    outline: none;
    border-color: #64FFDA;
  }
`;

const TextArea = styled.textarea`
  padding: 0.75rem;
  background: #0A192F;
  border: 1px solid #233554;
  border-radius: 4px;
  color: #CCD6F6;
  font-size: 1rem;
  min-height: 100px;
  resize: vertical;

  &:focus {
    outline: none;
    border-color: #64FFDA;
  }
`;

const SubmitButton = styled.button`
  padding: 0.75rem;
  background: #64FFDA;
  color: #0A192F;
  border: none;
  border-radius: 4px;
  font-size: 1rem;
  font-weight: bold;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    opacity: 0.8;
  }
`;

const ManagementSection = styled.div`
  margin-top: 4rem;
`;

const SubTitle = styled.h2`
  color: #CCD6F6;
  border-bottom: 1px solid #233554;
  padding-bottom: 0.5rem;
  margin-bottom: 1.5rem;
`;

const ProjectList = styled.ul`
  list-style: none;
  padding: 0;
`;

const ProjectListItem = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  background: #2f75dfff;
  border-radius: 4px;
  margin-bottom: 1rem;
`;

const DeleteButton = styled.button`
  background: none;
  border: none;
  color: #262932ff;
  cursor: pointer;
  font-size: 1rem;
  transition: color 0.3s ease;

  &:hover {
    color: #e12323ff;
  }
`;

const Admin = () => {
  const [projects, setProjects] = useState([]);
  const [formData, setFormData] = useState({
    title: '', description: '', technologies: '', githubUrl: '', liveUrl: '',
  });

  useEffect(() => {
    axios.get('http://localhost:3001/api/projects')
      .then(response => setProjects(response.data))
      .catch(error => console.error("Erro ao buscar projetos:", error));
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('http://localhost:3001/api/projects', formData)
      .then(response => {
        alert('Projeto adicionado com sucesso!');
        setProjects([...projects, response.data]);
        setFormData({ title: '', description: '', technologies: '', githubUrl: '', liveUrl: '' });
      })
      .catch(error => {
        console.error('Erro ao adicionar projeto:', error);
        alert('Falha ao adicionar projeto.');
      });
  };
  
  const handleDelete = (id) => {
    if (window.confirm('Tem certeza que deseja remover este projeto?')) {
      axios.delete(`http://localhost:3001/api/projects/${id}`)
        .then(() => {
          setProjects(projects.filter(project => project.id !== id));
        })
        .catch(error => { console.error("Erro ao remover o projeto:", error); });
    }
  };

  return (
    <AdminContainer>
      <Title>Painel de Administração</Title>
      
      <Form onSubmit={handleSubmit}>
        <SubTitle>Adicionar Novo Projeto</SubTitle>
        <Input name="title" value={formData.title} onChange={handleChange} placeholder="Título do Projeto" required />
        <TextArea name="description" value={formData.description} onChange={handleChange} placeholder="Descrição" required />
        <Input name="technologies" value={formData.technologies} onChange={handleChange} placeholder="Tecnologias (separadas por vírgula)" required />
        <Input name="githubUrl" value={formData.githubUrl} onChange={handleChange} placeholder="URL do GitHub" required />
        <Input name="liveUrl" value={formData.liveUrl} onChange={handleChange} placeholder="URL do Projeto Online (opcional)" />
        <SubmitButton type="submit">Adicionar Projeto</SubmitButton>
      </Form>

      <ManagementSection>
        <SubTitle>Gerenciar Projetos Existentes</SubTitle>
        <ProjectList>
          {projects.map(project => (
            <ProjectListItem key={project.id}>
              <span>{project.title}</span>
              <DeleteButton onClick={() => handleDelete(project.id)}>
                <FaTrash />
              </DeleteButton>
            </ProjectListItem>
          ))}
        </ProjectList>
      </ManagementSection>
    </AdminContainer>
  );
};

export default Admin;