import React from "react";
import styled from "styled-components"
import {color} from "../theme"

const TitleBar = styled.div`
  align-items: center;
  background-color: ${color.baseColor1};
  box-shadow: -10px 8px 6px -6px black;
  color: white;
  padding: 0 20px;
  position: fixed;
  width: 100vw;
  z-index: 1;
  display: flex;
  justify-content: space-around;
  box-sizing: border-box;
`

const MainMenu = styled.ul`
  display: none;
  width: 500px;
  justify-content: space-between;
  text-decoration: none;
  list-style: none;

  @media all and (min-width: 768px) { display: flex }

`

const MenuLink = styled.a`
  text-decoration: none;
  color: white;
  font-size: 24px;
  font-weight: bold;
`
export const Header = () => (
  <TitleBar>
    <h2>DaveOuds.dev</h2>

    <MainMenu>
      <MenuLink href="">About</MenuLink>
      <MenuLink href="">Services</MenuLink>
      <MenuLink href="">Work</MenuLink>
      <MenuLink href="">Demos</MenuLink>
      <MenuLink href="">Contact</MenuLink>
    </MainMenu>
  </TitleBar>
)