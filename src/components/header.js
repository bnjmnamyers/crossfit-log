import * as React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"

import Nav from "./nav"

const HeaderStyled = styled.header`
    position: fixed;
    top: 0;
    left: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    padding: 20px 0;
    background-color: rgba(0, 0, 0, 1);
    z-index: 9999;
    box-sizing: border-box;

    @media screen and (min-width: 1024px) {
        background-color: rgba(0, 0, 0, 0.75);
    }
`

const Header = () => (
    <HeaderStyled>
        <Nav siteTitle={"CrossFit Log"} />
    </HeaderStyled>
)

Header.propTypes = {
    siteTitle: PropTypes.string,
}

Header.defaultProps = {
    siteTitle: ``,
}

export default Header
