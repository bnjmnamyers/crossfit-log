import React from "react"
import styled from "styled-components"

import { Link as SmoothLink } from "react-scroll"

import { Link } from "gatsby"

const NavStyled = styled.nav`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 100%;
    max-width: 1420px;

    .logo {
        font: 700 2.5rem ${props => props.theme.fonts[0]};
        color: ${props => props.theme.colors.primary};
        text-decoration: none;

        @media screen and (min-width: 768px) {
            font-size: 3rem;
        }
    }

    .links {
        display: flex;
        align-items: center;

        a {
            margin: 0 20px;
            color: ${props => props.theme.colors.primary};
            font: 500 1.2rem ${props => props.theme.fonts[0]};

            &:hover {
                text-decoration: underline;
                cursor: pointer;
            }
        }
    }
`

export default function Nav({ siteTitle }) {
    return (
        <NavStyled>
            <h1 style={{ margin: 0 }}>
                <Link className="logo" to="/">
                    {siteTitle}
                </Link>
            </h1>
            <section className="links">
                <SmoothLink
                    to="about"
                    spy={true}
                    smooth={true}
                    duration={500}
                    offset={-111}
                >
                    ABOUT
                </SmoothLink>
                <SmoothLink
                    to="WOD"
                    spy={true}
                    smooth={true}
                    duration={500}
                    offset={-111}
                >
                    WOD
                </SmoothLink>
            </section>
        </NavStyled>
    )
}
