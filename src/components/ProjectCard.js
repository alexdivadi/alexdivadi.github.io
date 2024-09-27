// src/components/ProjectCard.js
import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Card = styled(Link)`
  display: block; /* Ensures the link covers the entire card */
  background: white;
  border-radius: 10px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  width: 300px; 
  overflow: hidden; 
  text-decoration: none; /* Remove underline from link */
  color: inherit; /* Inherit color from parent */
  transition: transform 0.3s;

  &:hover {
    transform: translateY(-5px);
  }
`;

const Image = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
`;

const Content = styled.div`
  padding: 1rem;
  text-align: left;
`;

const Title = styled.h3`
  font-size: 1.5rem;
  margin: 0 0 0.5rem;
`;

const Description = styled.p`
  color: #666;
  font-size: 1rem;
  margin: 0;
`;

const ProjectCard = ({ project }) => {
  return (
    <Card to={project.description ? `/project/${project.id}` : project.link}>
      <Image src={project.image} alt={project.title} />
      <Content>
        <Title>{project.title}</Title>
        <Description>{project.excerpt}</Description>
      </Content>
    </Card>
  );
};

export default ProjectCard;
