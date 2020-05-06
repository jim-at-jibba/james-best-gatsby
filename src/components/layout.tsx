/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"
import { createGlobalStyle, css } from "../utils/styled-components"
import styled, { ThemeProvider } from "styled-components"
import { theme } from "../utils/theme"
import ImageBg from "./background-image"

const GlobalStyle = createGlobalStyle`
  html {
    height: 100%;
    position: relative;
    overflow:auto;
    font-size: 10px;
    }
  body {
    height: 100%;
    font-size: 10px;
  }
  *,
  *::before,
  *::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  html {
    font-size: 62.5%;
  }
  button, a {
    outline: none;
  }
  body {
    box-sizing: border-box;
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
          <HomeBodyWrapper>
            <main>{children}</main>
          </HomeBodyWrapper>
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

const HomeBodyWrapper = styled.div`
  ${() => css`
    display: flex;
    height: calc(100vh - 80px);
  `}
`

export default Layout
