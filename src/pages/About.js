// src/pages/Contact.js
import React from 'react';
import { Container, Title, Description } from '../StyledComponents';
import styled from 'styled-components';
import profileImage from '../assets/images/profile.jpg';

const Image = styled.img`
  width: 200px; // Width of the circular image
  height: 200px; // Height of the circular image
  border-radius: 50%; // Makes the image circular
  object-fit: cover; // Maintains aspect ratio
`;

const About = () => {
    return (
        <Container>
            <Image src={profileImage} alt='' />
            <Title>Contact Me</Title>
            <Description>
                LinkedIn: <a href='https://www.linkedin.com/in/david-allen-dev/'>View my Profile</a>
                <br />Email: dawork20100@gmail.com
            </Description>
        </Container>
    );
};

export default About;
