import React from "react"
import Background from './../images/headshot.png'
import styled from 'styled-components';
import { color } from "../theme"


const StyledBlock = styled.div`
  background: url(${Background}) no-repeat bottom right;
  background-position-x: 80%;
  background-size: 300%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;

  @media all and (min-width: 768px) { 
    background-position-x: 120%;
    background-size: 70%;
  }
`
const TextBlock = styled.div`
  position: relative;
  bottom: 10%;
  text-align: center;
  
  @media all and (min-width: 768px) { text-align: none }
`
const Name = styled.h1`
  width: 150px;
  margin: 0 auto;
  color: ${color.baseColor1};

  @media all and (min-width: 768px) { width: 100% }
`
const SubTitle = styled.p`
  width: 250px;
  @media all and (min-width: 768px) { width: 100% }

`
const ColoredText = styled.span`
  color: ${color.accentColor};
`
export const Hero = () => (
  <StyledBlock>
      <TextBlock>

        <Name>Davey Oudshoorn</Name>

        <SubTitle>
          For all your <ColoredText>websites</ColoredText>, <ColoredText>webshops</ColoredText> and <ColoredText>web-applications</ColoredText>.
        </SubTitle>
        
      </TextBlock>
  </StyledBlock>
)