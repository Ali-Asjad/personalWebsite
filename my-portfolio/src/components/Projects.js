import React from 'react';
import styled from 'styled-components';

const Section = styled.section`
  padding: 100px 20px;
  background: #fff;
  text-align: center;
`;

const Projects = () => {
  return (
    <Section id="projects">
      <h2>Projects</h2>
      <p>Details about your projects.</p>
    </Section>
  );
};

export default Projects;
