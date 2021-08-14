import React from "react";
import Navbar from "./sections/Navbar";
import Projects from "./sections/Projects";
import Skills from "./sections/Skills";
import METADATA from "./data/metadata";
import { Helmet, HelmetProvider } from "react-helmet-async";
function App() {
  return (
    <HelmetProvider>
      <div className="App">
        <Helmet>
          <meta charSet="utf-8" />
          <title>{METADATA.TITLE}</title>
          <meta name="description" content={METADATA.DESCRIPTION} />
        </Helmet>
        <Navbar />
        <Skills />
        <Projects />
      </div>
    </HelmetProvider>
  );
}

export default App;
