import React from "react";
import styled from "styled-components"

import { color } from "../theme"
import Background from './../images/office.jpg'

const StyledBlock = styled.div`
  background: ${color.baseColor2} url(${Background}) no-repeat left;
  background-size: cover;
  display: flex;
  flex-direction: column;
  justify-content: center;
  color: ${color.baseColor2};
`
const TextBlock = styled.div`
  background-color: ${color.baseColor1};
  color: ${color.baseColor2};
  height: fit-content;
  padding: 75px;
  margin: 150px 0 150px 20%;

  @media all and (min-width: 768px) { margin-left: 50% }
`
const Title = styled.h2`
  width: fit-content;
`

export const About = () => (
  <StyledBlock>
    <TextBlock>
      <Title>About me</Title>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        <br/>
        <br/>
        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
        <br/>
        <br/>
        Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
      </p>
    </TextBlock>
  </StyledBlock>
)