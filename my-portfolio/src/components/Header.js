import React from 'react';
import styled from 'styled-components';

const HeaderContainer = styled.header`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background: linear-gradient(135deg, #f5f7fa, #c3cfe2);
  text-align: center;
  padding-top: 3rem;
`;

const ProfileImage = styled.img`
  border-radius: 50%;
  width: 250px;
  height: 250px;
  margin-bottom: 1rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

const Name = styled.h1`
  font-size: 4rem;
  margin-bottom: 0.5rem;
  font-family: "Ubuntu", sans-serif;
`;

const Title = styled.p`
  font-size: 3rem;
  color: #555;
  margin-bottom: 2rem;
  font-family: "Ubuntu", sans-serif;
`;

const ButtonGroup = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 1rem;
  font-family: "Ubuntu", sans-serif;
`;

const Header = () => {
  return (
    <HeaderContainer>
      <ProfileImage src="/pfp.jpg" alt="Profile" />
      <Name>Hello! I am Ali Asjad</Name>
      <Title>Full Stack Developer focused <br/> on Back-end Development</Title>
      <ButtonGroup>
        <button>Download CV</button>
        <button>Contact Info</button>
      </ButtonGroup>
    </HeaderContainer>
  );
};

export default Header;
