import React from "react"
import styled from "styled-components"

const SectionStyled = styled.section`
    display: flex;
    flex-direction: column;
`

export default function Workout({ workout }) {
    console.log(workout)
    return (
        <SectionStyled id="WOD">
            <h2>WOD - {workout.date}</h2>
            <p>Type:{workout.type}</p>
            <p>Description:</p>
            <p>{workout.description}</p>
            <ul>
                {workout.movementList.map((movement, index) => (
                    <li key={index}>{movement}</li>
                ))}
            </ul>
            <p>{workout.text}</p>
        </SectionStyled>
    )
}
