// src/components/Footer.js
import React from 'react';
import styled from 'styled-components';

const FooterContainer = styled.footer`
  text-align: center;
  padding: 1rem;
  background-color: #13070C;
  color: white;
`;

const Footer = () => {
    return (
        <FooterContainer>
            <p>&copy; 2024 David Allen</p>
        </FooterContainer>
    );
};

export default Footer;
