import React from "react"
import Background from './../images/headshot.png'
import styled from 'styled-components';
import { color } from "../theme"

const StyledBlock = styled.div`
  background: url(${Background}) no-repeat bottom right;
  background-position-x: 83%;
  background-size: 280%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;

  @media all and (min-width: 768px) { 
    background-size: 300%;
    background-position-x: 120%;
    background-size: 70%;
  }
`
const TextBlock = styled.div`
  position: relative;
  bottom: 10%;
  text-align: center;
  width: 250px;
  
  @media all and (min-width: 768px) { 
    bottom: 4%;
    text-align: left;
    left: -250px;
    width: fit-content;
  }
`
const Name = styled.h1`
  margin: 10px auto;
  color: ${color.baseColor1};
`
const ColoredText = styled.span`
  color: ${color.accentColor};
`

const Divider = styled.div`
  width: 2px;
  height: inherit;
  background-color: ${color.accentColor};
`
const Title = styled.p`
  display: none;
  @media all and (min-width: 768px) { 
    margin: 10px auto;
    display: flex;
    justify-content: space-between;
  }
`

const SubTitle = styled.p`
  margin: 10px auto;
  text-align: center;
`
export const Hero = () => (
  <StyledBlock>
      <TextBlock>

        <Name>Davey Oudshoorn</Name>
        <Title>
          <Divider />
          Full Stack developer
          <Divider />
          Data Science enthusiast
          <Divider />
          DevOps fanatic
          <Divider />
        </Title>
        <SubTitle>
          Lets create something <ColoredText>together</ColoredText>
        </SubTitle>
      </TextBlock>
  </StyledBlock>
)