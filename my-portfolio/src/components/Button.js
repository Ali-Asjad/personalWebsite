import React from 'react';
import styled from 'styled-components';

// Define color variants for the button
const ButtonWrapper = styled.a`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: ${(props) => (props.iconOnly ? '0.5rem' : '0.5rem 1.5rem')};
  margin: 0 0.5rem;
  border-radius: 50px;
  background-color: ${(props) =>
    props.variant === 'primary'
      ? 'rgba(254, 111, 90, 0.8)' // Primary color
      : 'rgba(33, 33, 48, 0.8)'}; // Secondary color
  color: #fff;
  text-decoration: none;
  font-family: 'Roboto', sans-serif;
  font-size: ${(props) => (props.iconOnly ? '0' : '1.3rem')};
  transition: background-color 0.3s ease, transform 0.3s ease;

  &:hover {
    background-color: ${(props) =>
      props.variant === 'primary'
        ? 'rgba(254, 111, 90, 1)' // Primary hover color
        : 'rgba(33, 33, 48, 1)'}; // Secondary hover color
    transform: scale(1.1);
  }

  & > img {
    margin-left: ${(props) => (props.iconOnly ? '0' : '0.5rem')};
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

const Button = ({ href, icon, children, variant = 'primary' }) => {
  const iconOnly = !children;
  return (
    <ButtonWrapper
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      iconOnly={iconOnly}
      variant={variant}
    >
      {children}
      {icon && <img src={icon} alt="" />}
    </ButtonWrapper>
  );
};

export default Button;
