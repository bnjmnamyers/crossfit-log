import React from "react"
import styled from "styled-components"
import { withSize } from "react-sizeme"
import { StaticImage } from "gatsby-plugin-image"

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
    margin-top: 100px;

    @media screen and (min-width: 1024px) {
        margin-top: 0;
    }

    .hero {
    }

    #WOD {
        margin-top: 60px;
    }

    #about {
        display: flex;
        flex-direction: column;
        width: 100%;
        margin-top: 80px;
        padding: 32px;
        background-color: #000;
        color: #fff;
        box-sizing: border-box;

        h2:after {
            border: 8px solid #fff;
        }
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
            <section id="about">
                <h2>My CrossFit Journey</h2>
            </section>
            <section id="where-i-wod">
                <h2>Where I WOD</h2>
                <iframe
                    className="mcf-location-map"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3222.960601779028!2d-83.50979208435382!3d36.11881758009457!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x885b8b62a36c1a27%3A0xcb9c983bd79d5403!2s318%20W%20Old%20Andrew%20Johnson%20Hwy%2C%20Jefferson%20City%2C%20TN%2037760!5e0!3m2!1sen!2sus!4v1628273205994!5m2!1sen!2sus"
                    width="100%"
                    height="785"
                    loading="lazy"
                ></iframe>
            </section>
        </IndexStyled>
    </Layout>
)

export default withSize()(IndexPage)
