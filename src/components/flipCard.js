import React, { useState } from "react";
import styled from "styled-components";
import ReactCardFlip from "react-card-flip";

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
  margin: 25px 15px;
`;

const MainDiv = styled.div`
  width: 45%;
  margin: 25px 15px;
`
const H3 = styled.h3`
  margin: 0.6rem 0;
`
const H4 = styled.h4`
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
            <H3>{back.company}</H3>
            <H4>{back.jobTitle}</H4>
            <H4>{back.stack}</H4>
          </Back>
        </Card>
      </ReactCardFlip>
    </MainDiv>
  );
};
