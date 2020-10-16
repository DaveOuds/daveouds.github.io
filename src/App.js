import React, { useRef } from "react";
import {
  Header,
  Hero,
  About,
  Services,
  Contact,
  WorkExperience,
} from "./components";

import "./css/global.css";

const App = () => {
  const refs = {
    about: useRef(null),
    services: useRef(null),
    work: useRef(null),
    contact: useRef(null),
  };

  const scrollToRef = (ref) => {
    refs[ref].current.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <>
      <Header scrollToRef={scrollToRef} />

      <Hero />

      <div ref={refs.services}>
        <Services />
      </div>

      <div ref={refs.about}>
        <About />
      </div>

      <div ref={refs.work}>
        <WorkExperience />
      </div>

      <div ref={refs.contact}>
        <Contact />
      </div>
    </>
  );
};

export default App;
