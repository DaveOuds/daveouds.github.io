import React from "react";
import styled from "styled-components"
import {color} from "../theme"

const TitleBar = styled.div`
  align-items: center;
  background-color: ${color.baseColor1};
  box-shadow: -10px 8px 6px -6px black;
  color: white;
  padding-left: 20px;
  position: fixed;
  width: 100vw;
  z-index: 1;  
`

export const Header = () => (
  <TitleBar>
    <h1>DaveOuds.dev</h1>
  </TitleBar>
)