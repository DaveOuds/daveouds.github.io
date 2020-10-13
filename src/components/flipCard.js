import React, { useState } from "react";
import styled from "styled-components";
import ReactCardFlip from 'react-card-flip';

const Logo = styled.img`
  margin: auto auto;
  height: 150px;
  width: 80%;
`;

const Card = styled.div`
  border: 1px solid;
  box-shadow: 1px 1px darkgray;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 200px;
  margin: 25px 15px;
`

const Back = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  height: 200px;
  margin: 25px 15px;
`

export const FlipCard = ({ image, back }) => {
  const [flipped, setFlipped] = useState(false);

  return (
    <ReactCardFlip
      containerStyle={{width: "50%"}}
      isFlipped={flipped}
      flipDirection="horizontal"
    >
      <Card onMouseEnter={() => setFlipped(true)}>
        <Logo className="front" src={image} />
      </Card>

      <Card onMouseLeave={() => setFlipped(false)}>
        <Back>
          <h4>{back.company}</h4>
          <h4>{back.jobTitle}</h4>
          <h4>{back.stack}</h4>
        </Back>
      </Card>
    </ReactCardFlip>
  );
};
