import React from "react"
import styled from "styled-components"
import Layout from "../components/layout"
import Seo from "../components/seo"

const AddWorkoutStyled = styled.div`
    display: flex;
    flex-direction: column;
`

const AddWorkout = () => (
    <Layout>
        <AddWorkoutStyled>
            <Seo title="Add Workout"></Seo>
        </AddWorkoutStyled>
    </Layout>
)

export default AddWorkout
