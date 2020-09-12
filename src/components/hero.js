import React from "react"
import Background from './../images/headshot.png'
import styled from 'styled-components';
import { color } from "../theme"

const StyledBlock = styled.div`
  background: ${color.baseColor2} url(${Background}) no-repeat bottom right;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 580px;
  padding-top: 75px;
`
const TextBlock = styled.div`
  position: relative;
  bottom: 10%;
  text-align:center;
`
const Name = styled.h1`
  color: ${color.baseColor1};
`
const ColoredText = styled.span`
  color: ${color.accentColor};
`
export const Hero = () => (
  <StyledBlock>
      <TextBlock>

        <Name>Davey Oudshoorn</Name>

        <p>
          For all your <ColoredText>websites</ColoredText>, <ColoredText>webshops</ColoredText> and <ColoredText>web-applications</ColoredText>.
        </p>
        
      </TextBlock>
  </StyledBlock>
)