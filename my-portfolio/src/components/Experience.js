import React from 'react';
import styled from 'styled-components';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
// import { ReactComponent as WorkIcon } from '../uogLogo.svg';

const ExperienceSection = styled.section`
  background: inherit;
  padding: 6rem 6rem;
  height: 140vh;
`;

const Title = styled.h2`
  font-size: 2.5rem;
  font-weight: bold;
  margin-bottom: 1rem;
  text-align: center;
  font-family: 'Roboto', sans-serif;
`;



const Experience = () => {
  return (
    <ExperienceSection id="experience">
      <Title>Work Experience</Title>
      <VerticalTimeline>
        <VerticalTimelineElement
          className='vertical-timeline-element--work'
          contentArrowStyle={{ borderRight: '7px solid rgb (33, 150, 243)' }}
          date='June 2024 - Present'
          iconStyle={{ background: 'rgb(255, 255, 255)', color: '#ffffff', display: 'flex', justifyContent: 'center', alignItems: 'center'}}
          // icon={<WorkIcon style={{ width: '50px', height: '50px' }} />}
        >
          <h3 className="vertical-timeline-element-title">Research Assistant II – Web Designer</h3>
          <h4 className="vertical-timeline-element-subtitle">University of Guelph</h4>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className='vertical-timeline-element--work'
          contentArrowStyle={{ borderRight: '7px solid rgb (33, 150, 243)' }}
          date='May 2022 - April 2024'
          iconStyle={{ background: 'rgb(255, 255, 255)', color: '#ffffff' }}
        >
          <h3 className="vertical-timeline-element-title">Programming Assistant</h3>
          <h4 className="vertical-timeline-element-subtitle">University of Guelph CO-OP</h4>
          <p>Developed REST APIs using Postman and PostgreSQL with Python to send and retrieve data to/from the database.</p>
          <p>Developed a full-stack web application using Flask, Vue, PostgreSQL and Python to develop a front-end dashboard.</p>
          <p>Developed a file validation function in the back end using flask and JavaScript.</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className='vertical-timeline-element--work'
          contentArrowStyle={{ borderRight: '7px solid rgb (255, 150, 243)' }}
          date='May 2021 - August 2021'
          iconStyle={{ background: 'rgb(255, 255, 255)', color: '#ffffff' }}
        >
          <h3 className="vertical-timeline-element-title">Software Intern</h3>
          <h4 className="vertical-timeline-element-subtitle">TereSol Pvt. Ltd.</h4>
          <p>Created micro-services for front-end, back-end and middleware in Quarkus using Java, Vue.js and MySQL.</p>
          <p>Developed REST APIs using Insomnia and MySQL with Java to retrieve data from the database.</p>
          <p>Worked with JMeter, wrk and k6 to stress/load test APIs. Explored ELK stack to keep a record of system logs.</p>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </ExperienceSection>
  );
};

export default Experience;
