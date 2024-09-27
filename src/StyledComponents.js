import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;
  background-color: #EFF9F0; // Light background for contrast
  text-align: center;
`;

export const SubContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #896A67; // Light background for contrast
  text-align: center;
  color: #EFF9F0;
`;

export const Title = styled.h1`
  font-size: 2.5rem;
  color: #13070C; // Dark text for better readability
  margin-bottom: 1rem;
  font-family: 'Arial', sans-serif; // Use a clean font
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.1); // Subtle shadow effect
`;

export const Description = styled.p`
  font-size: 1.2rem;
  color: #13070C; // Softer color for description
  max-width: 600px; // Limit width for readability
  margin: 0 auto 2rem auto; // Center align with auto margins
`;

export const NavButton = styled(Link)`
  padding: 0.75rem 1.5rem;
  font-size: 1rem;
  color: white;
  background-color: #FF8800; // Bootstrap primary color
  border: none;
  border-radius: 5px;
  text-decoration: none;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #DD7600; // Darker shade on hover
  }
`;

export const LinkButton = styled.a`
  padding: 0.75rem 1.5rem;
  font-size: 1rem;
  color: white;
  background-color: #FF8800; // Bootstrap primary color
  border: none;
  border-radius: 5px;
  text-decoration: none;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #DD7600; // Darker shade on hover
  }
`;