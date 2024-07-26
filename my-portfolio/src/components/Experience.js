import React from 'react';
import styled from 'styled-components';

const Section = styled.section`
  padding: 100px 20px;
  background: #f9f9f9;
  text-align: center;
`;

const Experience = () => {
  return (
    <Section id="experience">
      <h2>Experience</h2>
      <p>Details about your experience.</p>
    </Section>
  );
};

export default Experience;
