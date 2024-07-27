import React from 'react';
import styled from 'styled-components';

const LogoContainer = styled.a`
  display: flex;
  align-items: center;
  text-decoration: none;
  color: #333;
  font-weight: bold;
  font-size: 1.25rem;
  cursor: pointer;

  &:hover {
    color: #007BFF;
  }
`;

const LogoImage = styled.img`
  border-radius: 70%;
  width: 40px;
  height: 40px;
  margin-right: 0.5rem;
`;

const LogoText = styled.span`
  font-family: 'Roboto', sans-serif;  /* Replace with your selected font */
`;

const Logo = () => {
  return (
    <LogoContainer href="#header">
      <LogoImage src="/Icons/logo.png" alt="Logo" />
      <LogoText>Ali Asjad</LogoText>
    </LogoContainer>
  );
};

export default Logo;
