import React from "react";
import styled from "styled-components";

export const ContentBlock = (props) => {
  const StyledBlock = styled.div`
    padding: 48px 8px;
    text-align: center;
    background: ${props.background};
    color: ${props.color};

    @media all and (min-width: 768px) {
      padding: 90px 160px;
    }
  `;

  const WidthBlock = styled.div`
    max-width: 1280px;
    margin: 0 auto;

  `
  return (
    <StyledBlock>
      <WidthBlock>
      <h2>{props.title}</h2>
      {props.children}
      </WidthBlock>
    </StyledBlock>
    )
};
