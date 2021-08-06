import React from "react"
import styled from "styled-components"

const SectionStyled = styled.section`
    display: flex;
    flex-direction: column;
    width: 80%;
    max-width: 1000px;
    font: 300 1rem ${props => props.theme.fonts[0]};
    text-align: left;

    @media screen and (min-width: 1024px) {
        padding: 32px 16px;
        box-shadow: 4px 4px 32px rgba(0, 0, 0, 0.33);
    }

    p,
    ul {
        margin-top: 16px;
    }

    .date {
    }

    .movement-list {
        list-style: none;
    }

    .text {
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
            <h2 className="date">Workout of the Day (WOD) - {date}</h2>
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
