import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Content from "../components/home-content"
import styled, { css } from "../utils/styled-components"
import px2vw from "../utils/px2vw"
import spacing from "../utils/spacing"
import mediaQueries from "../utils/media-queries"
import { Text } from "../components/typography"
import BodyWrapper from "../components/shared/BodyWrapper"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <BodyWrapper>
      <TagLineWrapper>
        <h1>Hello, I'm James. I'm a software engineer from Bristol, UK.</h1>
      </TagLineWrapper>
      <Content>
        <Title>About</Title>
        <Text>
          I’m a software engineer working primarily in JavaScript and
          Typescript. I'm a full stack engineer at Candide in Bristol.
        </Text>
        <Text>
          I create performant, highly scalable web based applications. I also
          create mobile applications with experience in React Native as well as
          the native platforms.
        </Text>
        <Text>
          Writer for the Salted Bytes and Candide publications and co-host of
          Salted Bytes podcast.
        </Text>
        <Text>Mentor at Coding Coach.</Text>
      </Content>
    </BodyWrapper>
  </Layout>
)

const Title = styled.h1`
  ${({ theme }) => css`
    font-family: "Dank Mono", monospace;
    color: ${theme.fonts.colors.primary};
    border-bottom: 5px solid ${theme.colors.accent};
    font-size: ${theme.fonts.sizes.xxxl};
    display: inline-block;
  `}
`

const TagLineWrapper = styled.div`
  ${({ theme }) => css`
    margin-bottom: ${px2vw(spacing(30))};

    h1 {
      font-family: "Dank Mono", monospace;
      font-size: ${theme.fonts.sizes.xxxl};
      ${mediaQueries("md")(`
        font-size: 50px;
      `)};
    }
  `}
`

export default IndexPage
