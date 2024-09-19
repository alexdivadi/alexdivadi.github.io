// src/pages/Home.js
import React from 'react';
import { Container, Title, Description, Button } from '../StyledComponents';



const Home = () => {
    return (
        <Container>
            <Title>Welcome to My Portfolio</Title>
            <Description>Hello! I am an aspiring developer.
                <br />I specialize in making Flutter/Dart apps and working with AI in Python</Description>
            <Button to="/projects">View Projects</Button>
        </Container>
    );
};

export default Home;
