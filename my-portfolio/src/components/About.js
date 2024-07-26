import React from 'react';
import styled from 'styled-components';

const AboutSection = styled.section`
  padding: 4rem 2rem;
  background: linear-gradient(135deg, #f5f7fa, #c3cfe2);
  height: 100vh;
`;

const Title = styled.h2`
  font-size: 2.5rem;
  font-weight: bold;
  margin-bottom: 1rem;
`;

const SubTitle = styled.h3`
  font-size: 1.5rem;
  font-weight: bold;
  margin-bottom: 2rem;
`;

const Description = styled.p`
  font-size: 1.1rem;
  line-height: 1.6;
  margin-bottom: 3rem;

  span {
    color: #ffcc00; /* Highlighted text color */
    font-weight: bold;
  }
`;

const CardContainer = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 1rem;
`;

const Card = styled.div`
  background-color: #282828;
  padding: 2rem;
  border-radius: 10px;
  flex: 1;
  min-width: 200px;
  text-align: center;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s;

  &:hover {
    transform: translateY(-10px);
  }

  img {
    width: 50px;
    margin-bottom: 1rem;
  }

  h4 {
    font-size: 1.2rem;
    font-weight: bold;
    margin-bottom: 0.5rem;
  }
`;

const About = () => {
  return (
    <AboutSection id="about">
      <SubTitle>About Me</SubTitle>
      <Title>Overview.</Title>
      <Description>
        I am a Computer Science graduate from the University of Guelph
      </Description>
      <CardContainer>
        <Card>
          <img src="/path/to/web-developer-icon.png" alt="Web Developer" />
          <h4>Web Developer</h4>
        </Card>
        <Card>
          <img src="/path/to/automations-developer-icon.png" alt="Automations Developer" />
          <h4>Automations Developer</h4>
        </Card>
        <Card>
          <img src="/path/to/backend-engineer-icon.png" alt="Backend Engineer" />
          <h4>Backend Engineer</h4>
        </Card>
        <Card>
          <img src="/path/to/technical-writer-icon.png" alt="Technical Writer" />
          <h4>Technical Writer</h4>
        </Card>
      </CardContainer>
    </AboutSection>
  );
};

export default About;
