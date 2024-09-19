// src/pages/Projects.js
import React from 'react';
import ProjectCard from '../components/ProjectCard';
import styled from 'styled-components';
import { Container, Title } from '../StyledComponents';
import projects from '../Projects';

const ProjectList = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 2rem; // Add gap between cards
`;


const Projects = () => {
  return (
    <Container>
      <div style={{ 'padding': '2rem' }}>
        <Title>My Projects</Title>
        <ProjectList>
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </ProjectList>
      </div>
    </Container>
  );
};

export default Projects;
