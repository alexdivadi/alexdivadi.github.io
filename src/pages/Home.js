// src/pages/Home.js
import React from 'react';
import { Container, Title, Description, NavButton } from '../StyledComponents';



const Home = () => {
    return (
        <Container>
            <Title>Welcome to My Portfolio</Title>
            <Description>Hello! My name is David Allen and I am a Mid-Level developer.
                <br /><br />I specialize in making user-friendly, multi-platform <strong>Flutter</strong> apps<br />
                and using <strong>Python</strong> and <strong>R</strong> to answer questions in <strong>Data Science</strong>.
                <br />I also have a keen interest in <strong>AI</strong> which often ties the two together!</Description>
            <NavButton to="/projects">View Projects</NavButton>
        </Container>
    );
};

export default Home;
