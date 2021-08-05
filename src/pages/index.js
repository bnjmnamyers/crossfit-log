import React from "react"
import styled from "styled-components"
import { withSize } from "react-sizeme"

import Layout from "../components/layout"
import Seo from "../components/seo"

import FailedBS from "../images/failed-bs.mp4"

import VideoPlayer from "../components/videoPlayer"
import Workout from "../components/workout"

import workoutData from "../../data/workoutData"

const IndexStyled = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 111px;

    @media screen and (min-width: 1024px) {
        margin-top: 0;
    }

    .hero {
    }
`

const IndexPage = ({ size }) => (
    <Layout>
        <IndexStyled>
            <Seo title="Home" />
            <VideoPlayer
                className="hero"
                video={FailedBS}
                title="Failure teaches us what we need to know in order to move forward"
            />
            <Workout workout={workoutData} />
            <div id="about">
                <h1>ABOUT!!!!!!</h1>
            </div>
        </IndexStyled>
    </Layout>
)

export default withSize()(IndexPage)
