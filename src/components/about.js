import React from "react";
import styled from "styled-components";

import { color } from "../theme";
import Background from "./../images/office.jpg";

const StyledBlock = styled.div`
  background: ${color.baseColor2} url(${Background}) no-repeat left;
  background-size: cover;
  display: flex;
  flex-direction: column;
  justify-content: center;
  color: ${color.baseColor2};
`;
const TextBlock = styled.div`
  background-color: ${color.baseColor1};
  color: ${color.baseColor2};
  height: fit-content;
  padding: 36px;
  margin: 150px 0 150px 20%;

  @media all and (min-width: 768px) {
    padding: 78px;
    margin-left: 50%;
  }
`;
const Title = styled.h2`
  width: fit-content;
`;

export const About = (ref) => (
  <StyledBlock innerRef={ref}>
    <TextBlock>
      <Title>About me</Title>
      <p>
        I'm a 25 year old Full Stack developer from Enschede in the Netherlands.
        <br />
        <br />
        Programming is my passion, to the point that I regard it more as a paid
        hobby than an actual job.
        <br />
        <br />I love to read, do a workout or a virtual lap of the Nürburgring.
      </p>
    </TextBlock>
  </StyledBlock>
);
