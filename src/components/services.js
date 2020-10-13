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
    box-shadow: 3px 3px #081430;
    background: white;
    width: 30%;
    height: 300px;
    color: black;
`
export const Services = () => (
  <ContentBlock background={color.accentColor} color={color.baseColor2}>
    <h2>Services</h2>
    <Cards>
        <Card>
            <h3>Products</h3>
            Websites <br />
            Webshops<br />
            Web applications<br />
            API's<br />
            Mobile Applications<br />
        </Card>
        <Card>
            <h3>Technologies</h3>
            Drupal<br />
            React<br />
            Golang<br />
            HTML5 & CSS3<br />
            SCSS<br />
            GIT<br />
            Docker<br />

        </Card>
        <Card>
            <h3>Data Science</h3>
        </Card>
    </Cards>
    

  </ContentBlock>
)