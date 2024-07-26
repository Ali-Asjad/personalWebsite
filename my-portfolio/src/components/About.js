import React from 'react';
import styled from 'styled-components';

const Section = styled.section`
  padding: 100px 20px;
  background: #fff;
  text-align: center;
`;

const About = () => {
  return (
    <Section id="about">
      <h2>About Me</h2>
      <p>Write a brief bio about yourself.</p>
    </Section>
  );
};

export default About;
