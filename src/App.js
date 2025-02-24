import React from 'react';
import { Element } from 'react-scroll';
import Header from './components/Header';
import Home from './components/Home';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Experience from './components/Experience';
import GlobalStyle from './styles/GlobalStyle';

function App() {
  return (
    <>
      <GlobalStyle />
      <Header />
      <Element name="home"><Home /></Element>
      <Element name="about"><About /></Element>
      <Element name="experience"><Experience /></Element>
      <Element name="projects"><Projects /></Element>
      <Element name="contact"><Contact /></Element>
    </>
  );
}

export default App;

