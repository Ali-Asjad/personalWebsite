import React from 'react';
import styled from 'styled-components';
import GlobalStyle from './styles/GlobalStyles';
import Navbar from './components/Navbar';
import Header from './components/Header';
import About from './components/About';

const Section = styled.section`
  height: 100vh;
`;

const App = () => {
  return (
    <>
      <GlobalStyle />
      <Navbar />
      <Section id="header">
        <Header />
      </Section>
      <Section id="about">
        <About />
      </Section>
      <Section id="experience">
        <h2>Experience</h2>
        <p>This is the experience section.</p>
      </Section>
      <Section id="projects">
        <h2>Projects</h2>
        <p>This is the projects section.</p>
      </Section>
      <Section id="contact">
        <h2>Contact</h2>
        <p>This is the contact section.</p>
      </Section>
    </>
  );
};

export default App;
