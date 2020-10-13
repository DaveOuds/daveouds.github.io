import React from "react";
import styled from "styled-components"
import { useForm } from '@statickit/react';
import { color } from "../theme"
import { ContentBlock } from "./"

const Title = styled.h2`
  border-bottom: 5px solid ${color.accentColor}; 
  width: fit-content;
`

const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;

  @media all and (min-width: 768px) {
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-around;
  }
`
const Label = styled.label`
  margin-bottom: 15px;
  display: flex;
  flex-direction: column;
  text-align: center;
  width: 100%;
`

export const Contact = () => {
  const [state, handleSubmit] = useForm("contactForm");

  if (state.succeeded) {
    return <p>Thanks for joining!</p>;
  }

  return (
    <ContentBlock background={color.accentColor} color={color.baseColor2}>
    <Title>Contact</Title>
    <Form onSubmit={handleSubmit}>
      <Label>
        Name
        <input type="text" id="name" name="name"/>
      </Label>
      
      <Label>
        Email
        <input type="text" id="email" name="email"/>
      </Label>

      <Label>
        What is your reason for reaching out?
        <select id="reason" name="reason">
          <option value="reason1">Reason1</option>
          <option value="reason2">Reason2</option>
          <option value="reason3">Reason3</option>
          <option value="reason3">Reason4</option>
        </select>
      </Label>

      <Label>
        What can I help you with?
        <textarea name="message" rows="10" cols="30">
          What can I help you with?
        </textarea>
      </Label>
      
      <input type="submit" value="Submit" style={{width: "40%"}}/>
    </Form>
  </ContentBlock>
)}