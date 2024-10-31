// src/components/Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Nav = styled.nav`
  display: flex;
  justify-content: space-around;
  align-items: center; 
  padding: 1rem 2rem; 
  background-color: #13070C;
  color: white;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);

  @media (max-width: 768px) {
    flex-direction: column; // Stack items on smaller screens
    padding: 1rem;
    text-align: center;
  }
`;


const NavLink = styled(Link)`
  color: white;
  text-decoration: none;
  font-size: 1.2rem; // Increase font size for better readability
  transition: color 0.3s ease;

  &:hover {
    color: #ffa500; // Change color on hover
  }

  & { // Add margin to the right of each link except the first one
    margin-left: 1.5rem;
  }
`;

const Navbar = () => {
  return (
    <Nav>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/projects">Projects</NavLink>
      <NavLink to="/about">About Me</NavLink>
    </Nav>
  );
};

export default Navbar;
