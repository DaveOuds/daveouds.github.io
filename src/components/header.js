import React from "react";
import styled from "styled-components"
import {color} from "../theme"
import logo from './../images/logo.svg'


const Logo = styled.img`
  max-height: 50px;
`;

const TitleBar = styled.div`
  align-items: center;
  background-color: ${color.baseColor1};
  box-shadow: 0px 2px 8px 0px rgba(0,0,0,0.75);
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

export const Header = ({scrollToRef}) => (
  <TitleBar>
    <Logo src={logo} />

    <MainMenu>
      <MenuLink onClick={() => scrollToRef("services")}>Skills</MenuLink>
      <MenuLink onClick={() => scrollToRef("about")}>About</MenuLink>
      <MenuLink onClick={() => scrollToRef("work")}>Work</MenuLink>
      {/* <MenuLink>Demos</MenuLink> */}
      <MenuLink onClick={() => scrollToRef("contact")}>Contact</MenuLink>
    </MainMenu>
  </TitleBar>
)