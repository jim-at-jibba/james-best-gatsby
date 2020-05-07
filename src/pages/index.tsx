import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Content from "../components/home-content"
import styled, { css } from "../utils/styled-components"
import px2vw from "../utils/px2vw"
import spacing from "../utils/spacing"

// TODO Sort media queries - dont forget <Content> stlyes
const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <HomeBodyWrapper>
      <Inner>
        <TagLineWrapper>
          <h1>Hello, I'm James. I'm a software engineer from Bristol, UK.</h1>
        </TagLineWrapper>
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
      </Inner>
    </HomeBodyWrapper>
  </Layout>
)

const HomeBodyWrapper = styled.div`
  ${() => css`
    display: flex;
    justify-content: center;
    height: calc(100vh - 80px);
  `}
`

const Inner = styled.div`
  ${({ theme }) => css`
    max-width: 1080px;
    align-self: flex-end;
  `}
`

const Title = styled.h1`
  ${({ theme }) => css`
    font-family: "Dank Mono", monospace;
    color: ${theme.fonts.colors.primary};
    border-bottom: 5px solid ${theme.colors.accent};
    font-size: ${px2vw(24)};
    display: inline-block;
  `}
`

const TagLineWrapper = styled.div`
  ${({ theme }) => css`
    margin-bottom: ${px2vw(spacing(30))};

    h1 {
      font-family: "Dank Mono", monospace;
      font-size: ${px2vw(40)};
    }
  `}
`

export default IndexPage
