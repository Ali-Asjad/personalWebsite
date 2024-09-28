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
  transform: scale(0.5);
  margin-right: 0.5rem;
`;

const Logo = () => {
  return (
    <LogoContainer href="#header">
      <LogoImage src="/Icons/signature.png" alt="Logo" />
    </LogoContainer>
  );
};

export default Logo;
