import React from 'react';
import styled from 'styled-components';

const ButtonWrapper = styled.a`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: ${props => (props.iconOnly ? '0.5rem' : '0.5rem 1.5rem')};
  margin: 0 0.5rem;
  border-radius: 50px;
  background-color: rgba(255, 255, 255, 0.1);
  color: #0f0f0f;
  text-decoration: none;
  font-family: 'Roboto', sans-serif;
  font-size: ${props => (props.iconOnly ? '0' : '1.3rem')};
  transition: background-color 0.3s ease;
  border: 2px solid rgba(15, 15, 15, 0.3);

  &:hover {
    background-color: rgba(255, 255, 255, 0.2);
    transform: scale(1.1);
  }

  & > img {
    margin-left: ${props => (props.iconOnly ? '0' : '0.5rem')};
    width: 25px;
    height: 25px;
    filter: grayscale(100%);
    transition: filter 0.3s ease, transform 0.3s ease;
  }

  &:hover > img {
    filter: none;
    transform: scale(1.1);
  }
`;

const Button = ({ href, icon, children }) => {
    const iconOnly = !children;
  return (
    <ButtonWrapper href={href} target="_blank" rel="noopener noreferrer" iconOnly={iconOnly}>
      {children}
      {icon && <img src={icon} alt="" />}
    </ButtonWrapper>
  );
};

export default Button;
