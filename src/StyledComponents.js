import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;
  background-color: #f4f4f4; // Light background for contrast
  text-align: center;
`;

export const Title = styled.h1`
  font-size: 2.5rem;
  color: #333; // Dark text for better readability
  margin-bottom: 1rem;
  font-family: 'Arial', sans-serif; // Use a clean font
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.1); // Subtle shadow effect
`;

export const Description = styled.p`
  font-size: 1.2rem;
  color: #666; // Softer color for description
  max-width: 600px; // Limit width for readability
  margin: 0 auto 2rem auto; // Center align with auto margins
`;

export const Button = styled(Link)`
  padding: 0.75rem 1.5rem;
  font-size: 1rem;
  color: white;
  background-color: #007bff; // Bootstrap primary color
  border: none;
  border-radius: 5px;
  text-decoration: none;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #0056b3; // Darker shade on hover
  }
`;