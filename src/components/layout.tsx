/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"
import { createGlobalStyle, css } from "../utils/styled-components"
import styled, { ThemeProvider } from "styled-components"
import { theme } from "../utils/theme"
import ImageBg from "./background-image"

const GlobalStyle = createGlobalStyle`
  html {
    box-sizing: border-box;
    font-size: 10px;
  }
  *, *:before, *:after {
    box-sizing: inherit;
  }
  body, h1, h2, h3, h4, h5, h6, p, ol, ul {
    margin: 0;
    padding: 0;
    font-weight: normal;
    font-family: "roboto";
    color: #333;
  }

  h1 {
    margin: 0.67em 0;
  }

  ol, ul {
    list-style: none;
  }

  img {
    max-width: 100%;
    height: auto;
  }
  p {
      font-size: 1.6rem;
  }
`

const Layout: React.SFC<{}> = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <ThemeProvider theme={theme}>
      <ImageBg>
        <Container>
          <Header />
          <main>{children}</main>
          <GlobalStyle />
        </Container>
      </ImageBg>
    </ThemeProvider>
  )
}
const Container = styled.div`
  padding: 0 25px;
  overflow: hidden;
`

export default Layout
