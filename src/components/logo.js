import React from "react";
import styled from "styled-components";

const IMG = styled.img`
  max-width: 50px;
  max-heigth: 50px;
  margin: 10px auto;
`;

const Block = styled.div`
  display: flex;
  flex-direction: column;
  width: 35%;
  text-align: center;
  margin: 12px auto;
`;

export const Logo = ({logo, text}) => (
  <Block>
    <IMG src={logo} />
    {text}
  </Block>
);
