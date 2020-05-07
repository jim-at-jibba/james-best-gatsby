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

const GlobalStyle = createGlobalStyle`
  *,
  *:before,
  *:after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  :root {
    font-size: ${px2vw(24)};

    @media (min-width: 768px) {
      font-size: ${px2vw(18)};
    }

    @media (min-width: 1024px) {
      font-size: ${px2vw(16)};
    }
  }
  body, h1, h2, h3, h4, h5, h6, p, ol, ul {
    font-weight: normal;
    font-family: "roboto";
    color: #333;
  }

  h1, h2, h3, h4, h5, h6 {
    font-family: "Dank Mono"
  }

  h1 {
    margin: ${px2vw(spacing(26))} 0;
  }

  ol, ul {
    list-style: none;
  }

  img {
    max-width: 100%;
    height: auto;
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
  ${({ theme }) => css`
    padding: 0 ${px2vw(spacing(25))};
    overflow: hidden;
  `}
`

export default Layout
