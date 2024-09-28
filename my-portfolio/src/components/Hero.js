import React from 'react';
import styled from 'styled-components';
import Button from './Button';

import { Download } from 'lucide-react';
import {RiLinkedinFill, RiGithubFill} from 'react-icons/ri';

const HeaderContainer = styled.header`
  display: flex;
  flex-direction: row;
  gap: 100px;
  align-items: center;
  justify-content: space-between;
  height: 100vh;
  padding: 50px;
`;

const DescriptionContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: left;
  justify-content: center;
  max-width: 50vw;
`;

const Title = styled.p`
  font-size: 2rem;
  color: #fe6f5a;
  text-align: left;
`;

const Name = styled.h1`
  font-size: 4rem;
  margin-bottom: 0.5rem;
  font-family: "Ubuntu", sans-serif;
  color: #fff;
`;

const Description = styled.p`
  font-size: 1.5rem;
  color: #fff;
  margin-bottom: 2rem;
  font-family: "Ubuntu", sans-serif;
  text-align: left;
`;

const ButtonGroup = styled.div`
  margin-top: 2rem;
`;


const Header = () => {
  return (
    <HeaderContainer>
      <DescriptionContainer>
        <Title>Software Engineer</Title>
        <Name>Hello, I am Ali Asjad</Name>
        <Description>I'm a Full Stack developer based in Mississauga, passionate about creating innovative solutions with technologies like AWS, GCP, and Azure. When I'm not coding, you can find me on the soccer field or cricket ground.</Description>
        <ButtonGroup>
          <Button href="resume.pdf" variant='primary'>
            Resume   
            <Download size={18}/>
          </Button>
          <Button href="https://www.linkedin.com/in/ali-asjad-412515229/" variant='secondary'> <RiLinkedinFill /></Button>
          <Button href="https://github.com/Ali-Asjad" variant='secondary'> <RiGithubFill/> </Button>
        </ButtonGroup>
      </DescriptionContainer>
      <div className='hero-container'>
        <div className='bg-shape'></div>
        <div className='dev-img-container'>
          <img
            className='dev-img'
            src='/Icons/Subject.png'
            alt='Developer Toon'
          />
        </div>
      </div>
    </HeaderContainer>
  );
};

export default Header;
