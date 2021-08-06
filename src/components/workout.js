import React from "react"
import styled from "styled-components"

const SectionStyled = styled.section`
    display: flex;
    flex-direction: column;
    font: 300 1rem ${props => props.theme.fonts[0]};
    text-align: center;

    .date {
        font: 500 1.5rem ${props => props.theme.fonts[0]};
    }

    .movement-list {
        list-style: none;
    }

    .text {
        margin: 20px 40px;
        box-sizing: border-box;
    }
`

export default function Workout({ workout }) {
    const {
        coachedBy,
        date,
        description,
        howIFelt,
        movementList,
        results,
        text,
        type,
    } = workout
    return (
        <SectionStyled id="WOD">
            <h2 className="date">WOD - {date}</h2>
            <p className="type">Type:{type}</p>
            <p className="desription__header">Description:</p>
            <p className="description">{description}</p>
            <ul className="movement-list">
                {movementList.map((movement, index) => (
                    <li className="movement" key={index}>
                        {movement}
                    </li>
                ))}
            </ul>
            <p className="text">{text}</p>
            <p>Results: {results}</p>
            <p>Coached By: {coachedBy}</p>
            <p>How I Felt: {howIFelt}</p>
        </SectionStyled>
    )
}
