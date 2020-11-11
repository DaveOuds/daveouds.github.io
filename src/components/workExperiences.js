import React from "react";
import styled from "styled-components";
import { ContentBlock } from "./";
import { FlipCard } from "./flipCard";
import Trimm from "./../images/trimm.png";
import Benchmark from "./../images/benchmark.png";
import Bixal from "./../images/bixal.png";
import Previder from "./../images/previder.png";

const Cards = styled.div`
  @media all and (min-width: 768px) {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
  }
`;
const bixal = {
  company: "Bixal",
  jobTitle: "Intern/Software Consultant",
  stack: "Drupal, ReactJS, Golang, Docker",
};

const previder = {
  company: "Previder",
  jobTitle: "Parttime Developer",
  stack: "Ruby",
};

const benchmark = {
  company: "Benchmark Electronics",
  jobTitle: "Graduation Student",
  stack: "Python, TF Agents, Docker, WebSockets, NodeJS",
};
const trimm = {
  company: "TRIMM",
  jobTitle: "Drupal Developer",
  stack: "NodeJS, React Native, ReactJS, Drupal, Kubernetes",
};

export const WorkExperience = () => (
  <ContentBlock title="Work Experience">
    <Cards>
      <FlipCard image={Trimm} back={trimm} />
      <FlipCard image={Benchmark} back={benchmark} />
      <FlipCard image={Bixal} back={bixal} />
      <FlipCard image={Previder} back={previder} />
    </Cards>
  </ContentBlock>
);
