// src/pages/ProjectDetail.js
import React from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import { LinkButton, Container, Description, Title } from '../StyledComponents';
import projects from '../Projects';


const Image = styled.img`
  width: 300px;
  height: auto;
  max-height: 400px; // Set a max height
  object-fit: cover;
`;

const Content = styled.p`
  font-size: 1.2rem;
  color: #666; // Softer color for description
  margin: 0 auto 2rem auto;
  max-width: 666px;
  align-items: center; 
  text-align: justify;
`;

const ProjectDetail = () => {
    const { id } = useParams();
    const project = projects.find(p => p.id === id);

    if (!project) {
        return <div>Project not found!</div>;
    }

    return (
        <Container>
            <Title>{project.title}</Title>
            <Image src={project.image} alt={project.title} />
            <Content>
                {project.description}
            </Content>
            <Description>
                <LinkButton href={project.link} target="_blank" rel="noopener noreferrer">
                    View Project
                </LinkButton>
            </Description>
        </Container>
    );
};

export default ProjectDetail;
