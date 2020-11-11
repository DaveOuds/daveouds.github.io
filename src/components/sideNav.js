import React from "react";
import styled from "styled-components";
import { color } from "../theme";

const PositionBlock = styled.div`
  position: fixed;
  right: 24px;
  top: 35%;
  display: none;
  flex-direction: column;
  @media all and (min-width: 768px) {
    display: flex;
  }
`;

const RedirectNav = styled.a`
  background-color: ${color.baseColor2};
  width: 10px;
  height: 10px;
  margin: auto 10px;
  border-radius: 50%;
  border: ${color.baseColor1} 3px solid;

  &:hover {
    cursor: pointer;

    & + p {
      visibility: visible;
    }
  }
  &.active {
    transform: scale(1.5);
  }
`;

const NavLabel = styled.p`
  background-color: ${color.accentColor};
  padding: 5px 10px;
  color: white;
  font-weight: bold;
  text-align: center;
  width: 180px;
  visibility: hidden;
`;

const Nav = styled.span`
  display: flex;
  direction: rtl;
`;

export const SideNav = (props) => {
  const NavButton = ({ id, text }) => (
    <Nav onClick={() => props.scrollToRef(id)}>
      <RedirectNav className={props.active === id ? "active" : ""} />
      <NavLabel>{text}</NavLabel>
    </Nav>
  );

  return (
    <PositionBlock>
      <NavButton id="banner" text="Home" />
      <NavButton id="skills" text="Skills" />
      <NavButton id="about" text="About" />
      <NavButton id="work" text="Work Experience" />
      <NavButton id="contact" text="Contact" />
    </PositionBlock>
  );
};
