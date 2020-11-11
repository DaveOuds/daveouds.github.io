import React, { useEffect, useRef, useState } from "react";
import {
  Hero,
  About,
  Skills,
  Contact,
  WorkExperience,
  SideNav,
} from "../components";

import "../css/global.css";

export const Home = () => {
  const [active, setActive] = useState("banner");
  const refs = {
    banner: useRef(null),
    about: useRef(null),
    skills: useRef(null),
    work: useRef(null),
    contact: useRef(null),
  };

  useEffect(() => {
    const callback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActive(entry.target.id);
          return true;
        }
      });
    };
    const observer = new IntersectionObserver(callback, { threshold: 1 });
    observer.observe(document.querySelector("#banner"));
    observer.observe(document.querySelector("#skills"));
    observer.observe(document.querySelector("#about"));
    observer.observe(document.querySelector("#work"));
    observer.observe(document.querySelector("#contact"));
  });

  const scrollToRef = (ref) => {
    refs[ref].current.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <>
      <SideNav scrollToRef={scrollToRef} active={active} />

      <div ref={refs.banner}>
        <Hero scrollToRef={scrollToRef} />
      </div>

      <div ref={refs.skills}>
        <Skills />
      </div>

      <div ref={refs.about}>
        <About />
      </div>

      <div ref={refs.work} id="work">
        <WorkExperience />
      </div>

      <div ref={refs.contact}>
        <Contact />
      </div>
    </>
  );
};
