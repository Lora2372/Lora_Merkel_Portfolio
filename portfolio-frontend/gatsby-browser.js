import "./src/css/variables.css"
// import "./src/css/main.css"

import React from "react"
import { createGlobalStyle, ThemeProvider } from "styled-components"
import Theme from "./src/themes/theme"
const GlobalStyles = createGlobalStyle`
    *,
    *::after,
    *::before {
        margin: 0;
        padding: 0;
        box-sizing: inherit; 
    }
    body{
        box-sizing: border-box;
        font-family: ${props => props.theme.fonts.primary};
        background-color:${props => props.theme.colors.white};
        color: ${props => props.theme.colors.grey1};
        line-height: ${props => props.theme.heights.height1};
        font-size: ${props => props.theme.sizes.xSmall};
        margin-top:${props => props.theme.spacings.large};
    }
`
export const wrapRootElement = ({ element }) => (
    <ThemeProvider theme={Theme}>
        <GlobalStyles />
        {element}
    </ThemeProvider>
)