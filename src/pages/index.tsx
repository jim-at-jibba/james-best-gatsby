import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Content from "../components/home-content"
import styled, { css } from "../utils/styled-components"
import px2vw from "../utils/px2vw"
import spacing from "../utils/spacing"
import { mediaQueries } from "../utils/media-queries"
import { Text } from "../components/typography"

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
          <Text>
            I’m a software engineer working primarily in JavaScript and
            Typescript. I'm a full stack engineer at Candide in Bristol.
          </Text>
          <Text>
            I create performant, highly scalable web based applications. I also
            create mobile applications with experience in React Native as well
            as the native platforms.
          </Text>
          <Text>
            Writer for the Salted Bytes and Candide publications and co-host of
            Salted Bytes podcast.
          </Text>
          <Text>Mentor at Coding Coach.</Text>
        </Content>
      </Inner>
    </HomeBodyWrapper>
  </Layout>
)

const HomeBodyWrapper = styled.div`
  ${() => css`
    display: flex;
    justify-content: center;
    height: calc(100vh - ${px2vw(80, 720)});

    ${mediaQueries("md")(`
      height: calc(100vh - ${px2vw(80, 1024)});
    `)}

    ${mediaQueries("xl")(`
      height: calc(100vh - ${px2vw(80)});
    `)}
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
