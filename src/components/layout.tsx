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
import px2vw from "../utils/px2vw"
import spacing from "../utils/spacing"
import Footer from "./footer"

const GlobalStyle = createGlobalStyle`
  html {
    box-sizing: border-box;
    font-size: 16px;
    overflow: hidden;
  }

  *,
  *::before,
  *::after {
    box-sizing: inherit;
  }

  body {
    padding: 0;
    margin: 0;
    font: 100% / 1.618 Roboto, Arial, sans-serif;
    color: #333;
  }

  h1, h2, h3, h4, h5, h6 {
    margin-top: 0;
    margin-bottom: 16px;
    font-family: "Dank Mono";
    color: #333
  }

  ol, ul {
    list-style: none;
  }

  img {
    max-width: 100%;
    height: auto;
  }

  a {
    text-decoration: none;
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
          <Footer />
          <GlobalStyle />
        </Container>
      </ImageBg>
    </ThemeProvider>
  )
}

const Container = styled.div`
  ${({ theme }) => css`
    padding: 0 ${px2vw(spacing(25))};
    overflow: hidden;
  `}
`

export default Layout
