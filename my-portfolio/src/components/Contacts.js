import React from 'react';
import styled from 'styled-components';

const Section = styled.section`
  padding: 100px 20px;
  background: #f9f9f9;
  text-align: center;
`;

const Contact = () => {
  return (
    <Section id="contact">
      <h2>Contact</h2>
      <p>Details about how to contact you.</p>
    </Section>
  );
};

export default Contact;
