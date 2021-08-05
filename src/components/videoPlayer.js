import React from "react"
import styled from "styled-components"

const VideoContainerStyled = styled.section`
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100vw;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.33);
    overflow: hidden;
    z-index: 9990;

    @media screen and (min-width: 1024px) {
        height: 576px;
    }

    @media screen and (min-width: 1440px) {
        height: 100vh;
    }

    video {
        width: 100%;
        height: auto;
        z-index: 0;

        @media screen and (min-width: 1024px) {
            position: absolute;
            top: 0;
        }
    }

    h1 {
        position: relative;
        display: inline;
        width: 100%;
        padding: 40px 20px;
        font: 700 2rem ${props => props.theme.fonts[0]};
        color: ${props => props.theme.colors.primary};
        background-color: #000;
        text-align: center;
        text-transform: uppercase;
        z-index: 8888;
        box-sizing: border-box;

        @media screen and (min-width: 1024px) {
            width: 75%;
            font: 700 2.5rem ${props => props.theme.fonts[0]};
            color: rgba(255, 255, 255, 0.85);
            background-color: rgba(0, 0, 0, 0.5);
        }
    }
`

export default function VideoPlayer({ className, title, video }) {
    return (
        <VideoContainerStyled className={className}>
            <video autoPlay muted loop playsInline>
                <source src={video} />
            </video>
            <h1>{title}</h1>
        </VideoContainerStyled>
    )
}
