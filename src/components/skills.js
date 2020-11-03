import React from "react";
import { color } from "../theme";
import { ContentBlock, Logo } from ".";
import styled from "styled-components";
import Cassandra from "./../images/technologies/cassandra.png";
import CSS from "./../images/technologies/css.png";
import Docker from "./../images/technologies/docker.png";
import Drupal from "./../images/technologies/drupal8.png";
import Django from "./../images/technologies/django.svg";
import Git from "./../images/technologies/git.png";
import Go from "./../images/technologies/go.svg";
import GraphQL from "./../images/technologies/graphql.png";
import Kafka from "./../images/technologies/kafka.png";
import HTML from "./../images/technologies/html5.png";
import JQuery from "./../images/technologies/jquery.png";
import JS from "./../images/technologies/js.png";
import MYSQL from "./../images/technologies/mysql.png";
import Node from "./../images/technologies/node.png";
import PHP from "./../images/technologies/php.svg";
import Python from "./../images/technologies/python.png";
import ReactLogo from "./../images/technologies/react.png";
import RespDes from "./../images/technologies/responsiveDesign.jpg";
import Sass from "./../images/technologies/sass.png";
import TF from "./../images/technologies/tf.png";
import WebSockets from "./../images/technologies/websockets.png";

const Cards = styled.div`
  @media all and (min-width: 768px) {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }
`;
const Card = styled.div`
  display: inline-block;
  margin: 12px 6px;
  border-radius: 5px;
  box-shadow: 0px 2px 10px 3px rgba(0, 0, 0, 0.75);
  background: white;
  color: black;
  @media all and (min-width: 768px) {
    width: 30%;
  }
`;

const Logos = styled.div`
  display: flex;
  flex-flow: row wrap;
  width: 90%;
  margin: 0 auto;
`;
export const Skills = () => (
  <ContentBlock
    background={color.baseColor1}
    color={color.baseColor2}
    title="Skills"
  >
    <Cards>
      <Card>
        <h3>Frontend</h3>
        <Logos>
          <Logo logo={JQuery} text="Jquery" />
          <Logo logo={JS} text="Javascript" />
          <Logo logo={ReactLogo} text="React(JS/ Native)" />
          <Logo logo={Sass} text="Sass" />
          <Logo logo={CSS} text="CSS3" />
          <Logo logo={HTML} text="HTML5" />
          <Logo logo={RespDes} text="Responsive Design" />
        </Logos>
      </Card>
      <Card>
        <h3>Backend</h3>
        <Logos>
          <Logo logo={Go} text="Go / Golang" />
          <Logo logo={PHP} text="PHP" />
          <Logo logo={Node} text="Node(Js)" />
          <Logo logo={Django} text="Django" />
          <Logo logo={Python} text="Python" />
          <Logo logo={GraphQL} text="GraphQL" />
        </Logos>
        
      </Card>
      <Card>
        <h3>Other</h3>
        <Logos>
          <Logo logo={TF} text="TensorFlow" />
          <Logo logo={Drupal} text="Drupal" />
          <Logo logo={Git} text="Git" />
          <Logo logo={Docker} text="Docker" />
          <Logo logo={MYSQL} text="MySQL" />
          <Logo logo={WebSockets} text="WebSockets" />
          <Logo logo={Cassandra} text="Apache Cassandra" />
          <Logo logo={Kafka} text="Apache Kafka" />
        </Logos>
      </Card>
    </Cards>
  </ContentBlock>
);
