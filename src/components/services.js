import React from "react";
import { color } from "../theme"
import { ContentBlock } from "./"
import styled from 'styled-components';

const Cards = styled.div`
  @media all and (min-width: 768px) {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }
`
const Card = styled.div`
  border-radius: 5px;
  box-shadow: 0px 2px 10px 3px rgba(0,0,0,0.75);
  background: white;
  color: black;
  @media all and (min-width: 768px) {
    width: 30%;
    height: 300px;
  }
`
export const Services = () => (
  <ContentBlock background={color.accentColor} color={color.baseColor2} title="Skills">
    <Cards>
        <Card>
            <h3>Frontend</h3>
            React(JS/ Native)<br />
            HTML5 & CSS3<br />
            SCSS<br />
            Responsive Design<br />
        </Card>
        <Card>
            <h3>Backend</h3>
            PHP<br />
            NodeJS<br />
            Python<br />
            Django<br />
            Java<br />
            Golang<br />

        </Card>
        <Card>
            <h3>Other</h3>
            TensorFlow<br />
            Drupal<br />
            GIT<br />
            Docker<br />
            WebSockets<br />
            SQL<br />
            Apache Cassandra<br />
            Apache Kafka<br />
        </Card>
    </Cards>
    

  </ContentBlock>
)