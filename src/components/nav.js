import React from "react"
import styled from "styled-components"

import scrollTo from "gatsby-plugin-smoothscroll"

import { Link } from "gatsby"

const NavStyled = styled.nav`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 100%;
    max-width: 1420px;

    .logo {
        font: 700 3rem ${props => props.theme.fonts[0]};
        color: ${props => props.theme.colors.primary};
        text-decoration: none;
    }

    .links {
        display: flex;
        justify-content: space-between;

        button {
            margin: 0 20px;
            background: none;
            border: none;
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
                <button onClick={() => scrollTo("#WOD")}>WOD</button>
                <button onClick={() => scrollTo("#about")}>ABOUT</button>
            </section>
        </NavStyled>
    )
}
