import React from 'react'
import styled from "styled-components"

export const ContentBlock = (props) => {
    const StyledBlock = styled.div`
        padding: 150px 16px;
        text-align: center;
        background: ${props.background};
        color: ${props.color};

        @media all and (min-width: 768px) {
            padding: 150px 160px;
        }

    `
    console.log(props)

    return(
        <StyledBlock>
            {props.children}
        </StyledBlock>
    )
}
