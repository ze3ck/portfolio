import "./App.css";
import styled, { ThemeProvider } from "styled-components";
import React, { useEffect } from "react";
import { darkTheme } from "./utils/Themes";
import Navbar from "./components/Navbar";
import Hero from "./components/HeroSection";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import { BrowserRouter as Router } from "react-router-dom";
import ContactMe from "./components/ContactMe";

const Body = styled.div`
  background-color: ${({ theme }) => theme.bg};
  width: 100%;
  overflow-x: hidden;
`;

const Wrapper = styled.div`
  background: linear-gradient(
      38.73deg,
      rgba(13, 97, 169) 0%,
      rgba(201, 32, 184, 0) 50%
    ),
    linear-gradient(
      141.27deg,
      rgba(0, 70, 209, 0) 50%,
      rgba(0, 70, 209, 0.15) 100%
    );
  width: 100%;
  clip-path: polygon(0 0, 100% 0, 100% 100%, 100% 100%, 0 100%);
`;

function App() {
  useEffect(() => {
    document.title = "Ze3ck | Portfolio";
  }, []);
  return (
    <ThemeProvider theme={darkTheme}>
      <Router>
        <Navbar />
        <Body>
          <Hero />
          <Wrapper>
            <Skills />
            <Experience />
            <ContactMe />
          </Wrapper>
        </Body>
      </Router>
    </ThemeProvider>
  );
}

export default App;
