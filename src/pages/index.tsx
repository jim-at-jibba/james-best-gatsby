import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Content from "../components/home-content"
import styled, { css } from "../utils/styled-components"

// TODO Sort media queries - dont forget <Content> stlyes
const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <HomeBodyWrapper>
      <Content>
        <Title>About</Title>
        <p>
          I’m a software engineer working primarily in JavaScript and
          Typescript. I am a full stack engineer at Candide in Bristol.
        </p>
        <p>
          I create performant, highly scalable web based applications. I also
          create enterprise level mobile applications with experience in React
          Native as well as the native platforms.{" "}
        </p>
        <p>
          Writer for the Salted Bytes and Candide publications and co-host of
          Salted Bytes podcast.
        </p>
        <p>Mentor at Coding Coach.</p>
      </Content>
    </HomeBodyWrapper>
  </Layout>
)

const HomeBodyWrapper = styled.div`
  ${() => css`
    display: flex;
    height: calc(100vh - 80px);
  `}
`

const Title = styled.h1`
  ${({ theme }) => css`
    font-family: "Space Mono", monospace;
    color: ${theme.fonts.colors.primary};
    border-bottom: 5px solid ${theme.colors.accent};
    font-size: 24px;
    display: inline-block;
  `}
`
export default IndexPage
