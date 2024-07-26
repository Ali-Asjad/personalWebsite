import React from 'react';
import Navbar from './components/Navbar';
import Header from './components/Header';
import About from './components/About';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Contacts from './components/Contacts';
import { Element } from 'react-scroll';
import GlobalStyle from './styles/GlobalStyles';

function App() {
  return (
    <div>
      <GlobalStyle />
      <Navbar />
      <Element name="home">
        <Header />
      </Element>
      <Element name="about">
        <About />
      </Element>
      <Element name="experience">
        <Experience />
      </Element>
      <Element name="projects">
        <Projects />
      </Element>
      <Element name="contacts">
        <Contacts />
      </Element>
    </div>
  );
}

export default App;
