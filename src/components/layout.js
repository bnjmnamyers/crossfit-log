/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { Helmet } from "react-helmet"

import GlobalStyles from "./global-styles"

import Theme from "./theme"
import Header from "./header"

const Layout = ({ children }) => {
    return (
        <Theme>
            <Helmet>
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link
                    rel="preconnect"
                    href="https://fonts.gstatic.com"
                    crossorigin
                />
                <link
                    href="https://fonts.googleapis.com/css2?family=Oswald:wght@300;400;500;700&family=Roboto&display=swap"
                    rel="stylesheet"
                />
            </Helmet>
            <Header siteTitle={`CrossFit Log`} />
            <main>{children}</main>
            <footer
                style={{
                    marginTop: `2rem`,
                }}
            >
                © {new Date().getFullYear()}, Built with
                {` `}
                <a href="https://www.gatsbyjs.com">Gatsby</a>
            </footer>
            <GlobalStyles />
        </Theme>
    )
}

Layout.propTypes = {
    children: PropTypes.node.isRequired,
}

export default Layout
