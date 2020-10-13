import React from "react";
import { Header, Hero, About, Services, Contact, WorkExperience } from "./components"

import "./css/global.css"

class App extends React.Component {
  render() {
    return (
      <>
        <Header />
        
        <Hero />

        <Services />

        <About />

        <WorkExperience />

        <Contact />
    </>
    );
  }
}


export default App