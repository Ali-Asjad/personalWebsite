import React from 'react';
import styled from 'styled-components';

const ExperienceSection = styled.section`
  background: inherit;
  padding: 6rem 6rem;
  height: 120vh;
`;

const Title = styled.h2`
  font-size: 2.5rem;
  font-weight: bold;
  margin-bottom: 1rem;
  text-align: center;
  font-family: 'Roboto', sans-serif;
`;

const Timeline = styled.div`
  position: relative;
  margin: 2rem 0;
  padding: 2rem 0;
  &::before {
    content: '';
    position: absolute;
    width: 4px;
    background-color: #c3cfe2;
    top: 0;
    bottom: 0;
    left: 50%;
    margin-left: -2px;
  }
`;

const TimelineItem = styled.div`
  padding: 1rem 2rem;
  position: relative;
  width: 50%;
  left: ${(props) => (props.right ? '50%' : '0')};
  transform: ${(props) => (props.right ? 'translateX(-100%)' : 'none')};
  text-align: ${(props) => (props.right ? 'left' : 'right')};
  &:nth-child(odd) {
    left: 0;
  }
  &:nth-child(even) {
    left: 100%;
    transform: translateX(-100%);
  }
`;

const Circle = styled.span`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background: ${(props) => props.color || '#c3cfe2'};
  position: absolute;
  top: 20px;
  left: ${(props) => (props.right ? 'auto' : 'calc(50% - 10px)')};
  right: ${(props) => (props.right ? 'calc(50% - 10px)' : 'auto')};
`;

const Content = styled.div`
  background-color: #9bc4c4;
  padding: 1rem 2rem;
  border-radius: 10px;
  position: relative;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

const Position = styled.h3`
  margin: 0;
  font-size: 1.2rem;
  font-weight: bold;
  font-family: 'Roboto', sans-serif;
`;

const Company = styled.p`
  margin: 0;
  font-size: 1rem;
  font-family: 'Open Sans', sans-serif;
`;

const Duration = styled.span`
  display: block;
  font-size: 0.9rem;
  color: #888;
  font-family: 'Open Sans', sans-serif;
  margin-top: 0.5rem;
`;

const Experience = () => {
  return (
    <ExperienceSection id="experience">
      <Title>Work Experience</Title>
      <Timeline>
        <TimelineItem>
          <Circle />
          <Content>
            <Position>Research Assistant II – Web Designer</Position>
            <Company>University of Guelph</Company>
            <Duration>June 2024 – Present</Duration>
          </Content>
        </TimelineItem>
        <TimelineItem right>
          <Circle color="#ffcc00" />
          <Content>
            <Position>Programming Assistant</Position>
            <Company>University of Guelph CO-OP</Company>
            <Duration>May 2022 – Apr 2024</Duration>
            <p>Developed REST APIs using Postman and PostgreSQL with Python to send and retrieve data to/from the database.</p>
            <p>Developed a full-stack web application using Flask, Vue, PostgreSQL and Python to develop a front-end dashboard.</p>
            <p>Developed a file validation function in the back end using flask and JavaScript.</p>
          </Content>
        </TimelineItem>
        <TimelineItem>
          <Content>
            <Position>Software Intern</Position>
            <Company>Teresol Pvt. Ltd.</Company>
            <Duration>May 2021 - Aug 2021</Duration>
            <p>Created micro-services for front-end, back-end and middleware in Quarkus using Java, Vue.js and MySQL.</p>
            <p>Developed REST APIs using Insomnia and MySQL with Java to retrieve data from the database.</p>
            <p>Worked with JMeter, wrk and k6 to stress/load test APIs.</p>
            <p>Explored ELK stack to keep a record of system logs.</p>
          </Content>
        </TimelineItem>
      </Timeline>
    </ExperienceSection>
  );
};

export default Experience;
