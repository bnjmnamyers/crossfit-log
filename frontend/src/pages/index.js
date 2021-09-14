import React, { useEffect } from "react"
import styled from "styled-components"
import { withSize } from "react-sizeme"
import useGlobal from "../store"
// import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"

import FailedBS from "../images/failed-bs.mp4"

import MyCrossFitJourney from "../components/myCrossFitJourney"
import SectionTitle from "../components/sectionTitle"
import VideoPlayer from "../components/videoPlayer"
import Workout from "../components/workout"

import PersonalRecords from "../components/personal-records/personalRecords"

const IndexStyled = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 100px;

    @media screen and (min-width: 1024px) {
        margin-top: 0;
    }

    #about__wrapper {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 100%;
        margin-top: 80px;
        background-color: #333;
    }

    #WOD {
        margin-top: 60px;
    }

    #where-i-wod {
        width: 100%;

        .mcf-location-map {
            width: 100%;
            height: 785px;
            border: none;
            overflow: hidden;
        }
    }
`

const IndexPage = ({ size }) => {
    const [globalState, globalActions] = useGlobal()
    const { latestWod } = globalState

    useEffect(() => {
        globalActions.wodContent.getLatestWod()
    }, [])
    return (
        <Layout>
            <IndexStyled>
                <Seo title="Home" />
                <VideoPlayer
                    className="hero"
                    video={FailedBS}
                    title="Failure teaches us what we need to know in order to move forward"
                />
                <PersonalRecords isInverted={true} />
                <div id="about__wrapper">
                    <MyCrossFitJourney className="about" />
                </div>
                {latestWod.data ? <Workout workout={latestWod.data} /> : null}
                <section id="where-i-wod">
                    <SectionTitle title="Where I WOD" />
                    <iframe
                        className="mcf-location-map"
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3222.960601779028!2d-83.50979208435382!3d36.11881758009457!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x885b8d98cd7ac619%3A0xc1b70c45b4981137!2sMossy%20Creek%20Fitness!5e0!3m2!1sen!2sus!4v1628274044192!5m2!1sen!2sus"
                        width="100%"
                        height="785"
                        loading="lazy"
                        title="My CrossFit Gym Location (Mossy Creek Fitness)"
                    ></iframe>
                </section>
            </IndexStyled>
        </Layout>
    )
}

export default withSize()(IndexPage)
