import React from "react";
import styled from "styled-components"
import { ContentBlock } from "./"
import {FlipCard} from "./flipCard"
import Trimm from './../images/trimm.png'
import Benchmark from './../images/benchmark.png'
import Bixal from './../images/bixal.png'
import Previder from './../images/previder.png'

import { color } from "../theme"

const TitleBlock = styled.div`
  padding: 25px 10% 0 0;
  
  @media all and (min-width: 768px) { margin-right: 15% }
`
const Title = styled.h2`
  border-bottom: 5px solid ${color.accentColor};
  text-align: right;
`
const Cards = styled.div`

  @media all and (min-width: 768px) { 
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    margin: 0 10%;
  }
`
const bixal = {
  company: "Bixal",
  jobTitle: "Intern/Software Consultant",
  stack: "Drupal, ReactJS, Golang, Docker",
}

const previder = {
  company: "Previder",
  jobTitle: "Parttime Developer",
  stack: "Ruby,",
}

const benchmark = {
  company: "Benchmark Electronics",
  jobTitle: "Graduation Student",
  stack: "Python, TF Agents, Docker, WebSockets, NodeJS",
}
const trimm = {
  company: "TRIMM",
  jobTitle: "Drupal Developer",
  stack: "NodeJS, React Native, ReactJS, Drupal, Kubernetes",
}

export const WorkExperience = () => (
  <ContentBlock>
    <TitleBlock>
      <Title>Work Experience</Title>
    </TitleBlock>

    <Cards>
      <FlipCard image={Trimm} back={trimm} />
      <FlipCard image={Benchmark} back={benchmark} />
      <FlipCard image={Bixal} back={bixal} />
      <FlipCard image={Previder} back={previder} />
    </Cards>
  </ContentBlock>
)