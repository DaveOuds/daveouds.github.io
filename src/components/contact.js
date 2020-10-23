import React from "react";
import styled from "styled-components";
import { useForm } from "@statickit/react";
import { color } from "../theme";
import { ContentBlock } from "./";

const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 auto;
  width 50%;

  @media all and (min-width: 768px) {
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-around;
  }
`;
const Label = styled.label`
  margin-bottom: 15px;
  display: flex;
  justify-content: space-between;
  text-align: center;
  width: 100%;
  text-align: left;
  input { width: 80% }
`;

const Submit = styled.input`
  width: 150px;
  font-size: 24px;
  font-weight: bold;
  background-color: ${color.accentColor};
  color: ${color.baseColor2};
  height: 50px;
  border-radius:25px;
  border: none;
`;

export const Contact = () => {
  const [state, handleSubmit] = useForm("contactForm");

  if (state.succeeded) {
    return <p>Thanks for joining!</p>;
  }

  return (
    <ContentBlock background={color.baseColor1} color={color.baseColor2} title="Contact">
      
      <Form onSubmit={handleSubmit}>
        <Label>
          Name
          <input type="text" id="name" name="name" />
        </Label>

        <Label>
          Email
          <input type="text" id="email" name="email" />
        </Label>

        <Label>
          Subject
          <input type="text" id="subject" name="subject" />
        </Label>

        <Label style={{flexDirection: "column"}}>
          What can I help you with?
          <textarea name="message" rows="10" cols="30" />
        </Label>

        <Submit type="submit" />
      </Form>
    </ContentBlock>
  );
};
