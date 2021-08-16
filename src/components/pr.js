import React from "react"
import styled from "styled-components"

const PRStyled = styled.article`
    display: flex;
    flex-direction: column;
    width: 66%;
    margin-top: 24px;
    padding: 16px;
    border-radius: 16px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);

    @media screen and (min-width: 768px) {
        flex-wrap: wrap;
        width: 200px;
    }

    .title {
        font: 700 1.5rem ${props => props.theme.fonts[0]};
    }

    .date {
        font-size: 0.75rem;
    }

    .result {
        margin-top: 16px;
        font-size: 1.25rem;
    }
`

export default function PR({ pr }) {
    const { date, result, title } = pr
    return (
        <PRStyled>
            <p className="title">{title}</p>
            <p className="date">{date}</p>
            <p className="result">{result}</p>
        </PRStyled>
    )
}
