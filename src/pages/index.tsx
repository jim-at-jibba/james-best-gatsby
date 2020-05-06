import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Content from "../components/home-content"
import styled, { css } from "../utils/styled-components"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <HomeBodyWrapper>
      <Content>
        <p>Nope</p>
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
export default IndexPage
