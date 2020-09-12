import React from "react";
import styled from "styled-components"

import Trimm from './../images/trimm.png'
import Benchmark from './../images/benchmark.png'
import Bixal from './../images/bixal.png'
import Previder from './../images/previder.png'

import { color } from "../theme"

const StyledBlock = styled.div`
  margin-bottom: 50px;
`
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
    flex-wrap: wrap;
    margin: 0 10%;
  }
`
const Card = styled.div`
  border: 1px solid;
  box-shadow: 1px 1px darkgray;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 150px;
  margin: 25px 15px;
  
  @media all and (min-width: 768px) { width: 40%}
`

const Logo = styled.img`
  margin: auto auto;
  height: 150px;
  width: 80%;
`



export const WorkExperience = () => (
  <StyledBlock>
    <TitleBlock>
      <Title>Work Experience</Title>
    </TitleBlock>

    <Cards>
      <Card>
        <Logo src={Trimm} />
      </Card>
      <Card>
        <Logo src={Benchmark} />
      </Card>
      <Card>
        <Logo src={Bixal} />
      </Card>
      <Card>
        <Logo src={Previder} />
      </Card>
    </Cards>
  </StyledBlock>
)