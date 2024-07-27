import React from 'react';
import styled from 'styled-components';

const AboutSection = styled.section`
  padding: 4rem 6rem;
  background: inherit;
  height: 100vh;
`;

const Title = styled.h2`
  font-size: 2.5rem;
  font-weight: bold;
  margin-bottom: 1rem;
`;

const SubTitle = styled.h3`
  font-size: 2rem;
  font-weight: bold;
  margin-bottom: 2rem;
  font-family: "Ubuntu", sans-serif;
`;

const Description = styled.p`
  font-size: 1.2rem;
  line-height: 1.6;
  margin-bottom: 3rem;
  font-family: "Roboto", sans-serif;
  font-weight: 500;

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
  background-color: #9bc4c4;
  padding: 2rem;
  border-radius: 10px;
  flex: 1;
  min-width: 200px;
  text-align: center;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s;
  height: 300px;

  &:hover {
    transform: translateY(-10px);
  }

  img {
    width: 100px;
    min-height: 100px;
    margin-bottom: 1rem;
    margin-top: 0.5rem;
  }

  h4 {
    font-size: 1.75rem;
    font-weight: bold;
    margin-bottom: 0.5rem;
    color: #f2f7f4;
  }
`;

const About = () => {
  return (
    <AboutSection id="about">
      <SubTitle>About Me</SubTitle>
      <Title>Overview.</Title>
      <Description>
        I am a Computer Science graduate from the University of Guelph and a Full Stack developer based in Mississauga, <br />
        working full time as a web designer at the University of Guelph. I love working with new technology and creating innovative <br />
        solutions. When I am not coding, you would probably find me on a soccer field or a cricket ground. My passion for technology and <br/>
        data has driven me to pursue a career as a Back-end developer with a focus on Cloud technologies like AWS, GCP and Azure
      </Description>
      <CardContainer>
        <Card>
          <img src="/Icons/logo192.png" alt="Web Developer" />
          <h4>Web Developer</h4>
        </Card>
        <Card>
          <img src="/Icons/pythonLogo.png" alt="Automations Developer" />
          <h4>Python Developer</h4>
        </Card>
        <Card>
          <img src="/Icons/backendLogo.png" alt="Backend Engineer" />
          <h4>Backend Engineer</h4>
        </Card>
        <Card>
          <img src="/Icons/awsLogo.png" alt="Technical Writer" />
          <h4>Cloud Developer</h4>
        </Card>
      </CardContainer>
    </AboutSection>
  );
};

export default About;
