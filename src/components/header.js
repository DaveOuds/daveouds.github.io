import React from "react";
import styled from "styled-components";
import { color } from "../theme";
import logo from "./../images/logo.svg";

const Logo = styled.a`
  background: url(${logo}) no-repeat center;
  height: 50px;
  background-size: 100% 100%;
  width: 240px;
  &:hover {
    cursor: pointer;
  }
`;

const Bar = styled.div`
  background-color: ${color.baseColor1};
  box-shadow: 0px 2px 8px 0px rgba(0, 0, 0, 0.75);
  position: fixed;
  width: 100vw;
  z-index: 1;
  box-sizing: border-box;
`;

const ContentBlock = styled.div`
  justify-content: space-between;
  display: flex;
  align-items: center;
  color: white;

  margin: 0 auto;
  width: 80%;
`;

const MainMenu = styled.ul`
  display: none;
  justify-content: space-between;
  text-decoration: none;
  list-style: none;

  @media all and (min-width: 768px) {
    display: flex;
  }
`;

const MenuLink = styled.a`
  text-decoration: none;
  margin: 0 25px;
  color: white;
  font-size: 24px;
  font-weight: bold;
  &:hover {
    cursor: pointer;
  }
`;

export const Header = () => (
  <Bar>
    <ContentBlock>
      <Logo href="/" src={logo} />

      <MainMenu>
        <MenuLink href="/" >Home</MenuLink>
        <MenuLink href="/blog" >Blog</MenuLink>
        <MenuLink href="/demos" >Demos</MenuLink>
      </MainMenu>
    </ContentBlock>
  </Bar>
);
