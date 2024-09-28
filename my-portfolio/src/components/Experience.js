import React from 'react';
import styled from 'styled-components';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
// import { ReactComponent as WorkIcon } from '../uogLogo.svg';

const experiences = [
  {
    title: "Research Assistant II - Web Developer",
    company_name: "University of Guelph",
    icon: "./Icons/uofg.png",
    iconBg: "#ffffff",
    date: "June 2024 - Present",
    points: [
    ]
  },
  {
    title: "Programming Assistant",
    company_name: "University of Guelph CO-OP",
    icon: "./Icons/uofg.png",
    iconBg: "#ffffff",
    date: "May 2022 - April 2024",
    points: [
      "Developed REST APIs using Postman and PostgreSQL with Python to send and retrieve data to/from the database.",
      "Developed a full-stack web application using Flask, Vue, PostgreSQL and Python to develop a front-end dashboard.",
      "Developed a file validation function in the back end using flask and JavaScript."
    ]
  },
  {
    title: "Software Intern",
    company_name: "TereSol Pvt. Ltd.",
    icon: "",
    iconBg: "#ffffff",
    date: "May 2021 - August 2021",
    points: [
      "Created micro-services for front-end, back-end and middleware in Quarkus using Java, Vue.js and MySQL.",
      "Developed REST APIs using Insomnia and MySQL with Java to retrieve data from the database.",
      "Worked with JMeter, wrk and k6 to stress/load test APIs. Explored ELK stack to keep a record of system logs."
    ]
  },
]

const ExperienceSection = styled.section`
  background: inherit;
  padding: 6rem 6rem;
  height: 160vh;
`;

const Title = styled.h2`
  font-size: 2.5rem;
  font-weight: bold;
  font-family: "Ubuntu", sans-serif;
  color: #fff;
  margin-bottom: 4rem;
  text-align: center;
`;


const ExperienceCard = ({ experience }) => (
  <VerticalTimelineElement
    contentStyle={{background: '#1d1836', color:
      '#fff'}}
      contentArrowStyle={{borderRight: '7px solid #232631'}}
      date={experience.date}
      iconStyle={{background: experience.iconBg }}
      icon= {
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100%', height: '100%' }}>
          <img 
            src={experience.icon}
            alt={experience.company_name}
            style={{width: '60%', height: '60%', objectFit: 'contain'}}
          />
        </div>
      }
  >
    <div>
      <h3 className="text-white text-[24px]
        font-bold">
          {experience.title}
      </h3>  

      <p className="text-secondary text-[16px]
      font-semibold" style={{ margin:0 }}>
        {experience.company_name}
      </p>
    </div> 

    <ul className="mt-5 list-disc ml-1 space-y-2 mb-2">
      {experience.points.map((point, index) => (
        <p
          key={`experience-point-${index}`}
          className="text-white-100 text-[14px]
          pl-1 tracking-wider"
        >
          {point}
        </p>
      ))}
    </ul>
  </VerticalTimelineElement>
)

const Experience = () => {
  return (
    <ExperienceSection id="experience">
      <Title>Work Experience</Title>
      <VerticalTimeline lineColor='#fe705a'>
        {experiences.map((experience, index) => (
          <ExperienceCard key={index} experience={experience} />
        ))}
      </VerticalTimeline>
    </ExperienceSection>
  );
};

export default Experience;
