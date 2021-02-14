import React from "react"

import Layout from "../../components/layout"
import SEO from "../../components/seo"
import BodyWrapper from "../../components/shared/BodyWrapper"
import PostContent from "../../components/post-content"
import styled, { css } from "../../utils/styled-components"
import mediaQueries from "../../utils/media-queries"
import px2vw from "../../utils/px2vw"

const HundredDaysOfPage = () => {
  return (
    <Layout>
      <SEO title="Hacking" />
      <BodyWrapper>
        <PostContent>
          <h1>100 days of...</h1>
        </PostContent>
      </BodyWrapper>
    </Layout>
  )
}

const StyledSection = styled.section`
  ${() => css`
    display: flex;
    flex: 1;
    flex-direction: column;
    justify-content: space-around;
    padding-bottom: ${px2vw(30, 420)};

    ${mediaQueries("md")`
      flex: 1;
      flex-direction: column;
      padding-bottom: 0;
    `};
  `}
`

export default HundredDaysOfPage
