import React, { useState } from "react";
import styled from "styled-components";
import ReactCardFlip from "react-card-flip";
import { color } from "../theme"

const Logo = styled.img`
  margin: auto auto;
  max-height: 200px;
  width: 80%;
`;

const Card = styled.div`
  border: 1px solid;
  box-shadow: 1px 1px darkgray;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 200px;
`;

const Back = styled.div`
  display: flex;
  text-align: left;
  flex-direction: column;
  height: 100%;
  width: 100%;
  padding: 15px;
  box-sizing: border-box;
`;

const MainDiv = styled.div`
  margin: 25px 0;
  @media all and (min-width: 768px) { 
    width: 45%;
  }
`
const Company = styled.h3`
  border-bottom: 2px solid blue;
  width: 70%;
  margin: 0;
  margin-bottom: 18px;
  border-bottom: 2px solid ${color.accentColor}
`

const JobTitle = styled.p`
  font-weight: bold;
  margin-bottom: 18px;
`

const Body = styled.p`
  margin: 0.6rem 0;
`
export const FlipCard = ({ image, back }) => {
  const [flipped, setFlipped] = useState(false);

  return (
    <MainDiv
      onMouseEnter={() => setFlipped(true)}
      onMouseLeave={() => setFlipped(false)}
    >
      <ReactCardFlip
        containerStyle={{ position: "relative" }}
        isFlipped={flipped}
      >
        <Card>
          <Logo className="front" src={image} />
        </Card>

        <Card>
          <Back>
            <Company>{back.company}</Company>
            <JobTitle>{back.jobTitle}</JobTitle>
            <Body>{back.stack}</Body>
          </Back>
        </Card>
      </ReactCardFlip>
    </MainDiv>
  );
};
