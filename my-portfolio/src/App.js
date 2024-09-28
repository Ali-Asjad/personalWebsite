import React from 'react';
import styled from 'styled-components';
import GlobalStyle from './styles/GlobalStyles';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
// import About from './components/About';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Contact from './components/Contacts';

const Section = styled.section`
  // height: 100vh;
`;

const App = () => {
  return (
    <>
      <GlobalStyle />
      <Navbar />
      <Section id="header">
        <Hero />
      </Section>
      <Section id="experience">
        <Experience/>
      </Section>
      <Section>
        <Projects />
      </Section>
      <Section id="contact">
        <Contact/>
      </Section>
    </>
  );
};

export default App;
