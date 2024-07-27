import React from 'react';
import styled from 'styled-components';

const ContactSection = styled.section`
  background: inherit; /* Light background */
  color: #000; /* Dark text color */
  padding: 4rem 2rem;
  height: 100vh;
  text-align: center;
`;

const ContactTitle = styled.h2`
  font-size: 2.5rem;
  font-weight: bold;
  margin-bottom: 1rem;
  font-family: 'Roboto', sans-serif;
`;

const ContactSubtitle = styled.p`
  font-size: 1.2rem;
  margin-bottom: 2rem;
  font-family: 'Open Sans', sans-serif;
`;

const ContactBox = styled.div`
  display: inline-block;
  padding: 1.5rem 2.5rem;
  border: 2px solid #000;
  border-radius: 50px;
  background: #fff;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

const ContactLink = styled.a`
  display: inline-flex;
  align-items: center;
  margin: 0 1rem;
  font-size: 1rem;
  text-decoration: none;
  color: #000;
  font-family: 'Open Sans', sans-serif;

  &:hover {
    text-decoration: underline;
  }

  & > img {
    margin-right: 0.5rem;
    width: 24px;
    height: 24px;
  }
`;

const Contact = () => {
  return (
    <ContactSection id="contact">
      <ContactSubtitle>Get In Touch</ContactSubtitle>
      <ContactTitle>Contact Me</ContactTitle>
      <ContactBox>
        <ContactLink href="mailto:aliasjadwork@gmail.com">
          <img src="/Icons/emailLogo.png" alt="Email" /> aliasjadwork@gmail.com
        </ContactLink>
        <ContactLink href="https://www.linkedin.com/in/example" target="_blank" rel="noopener noreferrer">
          <img src="/Icons/linkedinLogo.png" alt="LinkedIn" /> LinkedIn
        </ContactLink>
      </ContactBox>
    </ContactSection>
  );
};

export default Contact;
