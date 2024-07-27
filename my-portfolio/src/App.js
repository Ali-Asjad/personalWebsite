import React from 'react';
import styled from 'styled-components';
import GlobalStyle from './styles/GlobalStyles';
import Navbar from './components/Navbar';
import Header from './components/Header';
import About from './components/About';
import Experience from './components/Experience';
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
        <Header />
      </Section>
      <Section id="about">
        <About />
      </Section>
      <Section id="experience">
        <Experience/>
      </Section>
      <Section id="contact">
        <Contact/>
      </Section>
    </>
  );
};

export default App;
