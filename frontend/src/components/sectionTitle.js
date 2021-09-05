import React from "react"
import styled from "styled-components"

const SectionTitleStyled = styled.h2`
    display: flex;
    flex-direction: column;
    font: 500 2.5rem/2.625rem ${props => props.theme.fonts[0]};
    color: ${props => (props.isInverted ? "#fff" : "#000")};

    @media screen and (min-width: 1024px) {
        font-size: 3.5rem;
    }

    &:after {
        content: "";
        border: 8px solid ${props => (props.isInverted ? "#fff" : "#000")};
        width: 120px;
        margin-top: 32px;
    }
`

export default function SectionTitle({ isInverted, title }) {
    return (
        <SectionTitleStyled isInverted={isInverted}>{title}</SectionTitleStyled>
    )
}
