import { createGlobalStyle } from "styled-components"

const GlobalStyles = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        font-family: ${props => props.theme.fonts[1]}
    }
`

export default GlobalStyles
