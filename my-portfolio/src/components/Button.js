import React from 'react';
import styled from 'styled-components';

const ButtonWrapper = styled.a`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 0.5rem 1.5rem;
  margin: 0 0.5rem;
  border-radius: 50px;
  background-color: rgba(255, 255, 255, 0.1);
  color: #0f0f0f;
  text-decoration: none;
  font-family: 'Roboto', sans-serif;
  font-size: 1rem;
  transition: background-color 0.3s ease;
  border: 2px solid rgba(15, 15, 15, 0.3);

  &:hover {
    background-color: rgba(255, 255, 255, 0.2);
  }

  & > img {
    margin-left: 0.5rem;
    width: 20px;
    height: 20px;
  }
`;

const Button = ({ href, icon, children }) => {
  return (
    <ButtonWrapper href={href} target="_blank" rel="noopener noreferrer">
      {children}
      {icon && <img src={icon} alt="" />}
    </ButtonWrapper>
  );
};

export default Button;
