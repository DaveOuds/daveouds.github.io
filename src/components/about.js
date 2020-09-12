import React from "react";
import styled from "styled-components"
import { color } from "../theme"

const StyledBlock = styled.div`
  background-color: ${color.baseColor1};
  color: ${color.baseColor2};
  text-align: center;
  padding: 25px 10%;
  display: flex;
  flex-direction: column;
  padding-bottom: 50px;

`


export const About = () => (
  <StyledBlock>
    <h2>About me</h2>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
      <br/>
      <br/>
      Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
    </p>
  </StyledBlock>
)