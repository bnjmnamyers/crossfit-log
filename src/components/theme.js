import React from "react"
import { ThemeProvider } from "styled-components"

const theme = {
    colors: {
        primary: "#fff",
    },
    fonts: ["'Oswald', sans-serif"],
}

const Theme = ({ children }) => (
    <ThemeProvider theme={theme}>{children}</ThemeProvider>
)

export default Theme
