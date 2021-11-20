import React from "react"
import Img from "gatsby-image"

import Layout from "../../components/layout"
import SEO from "../../components/seo"
import BodyWrapper from "../../components/shared/BodyWrapper"
import PostContent from "../../components/post-content"
import styled, { css } from "../../utils/styled-components"
import mediaQueries from "../../utils/media-queries"
import px2vw from "../../utils/px2vw"
import { graphql, useStaticQuery, Link } from "gatsby"

const HundredDaysOfPage = () => {
  const data = useStaticQuery(graphql`
    query {
      blockchain: file(relativePath: { eq: "blockchain/blockchain.png" }) {
        childImageSharp {
          fluid(quality: 90, maxWidth: 1080) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `)

  console.log("Data", data)
  return (
    <Layout>
      <SEO title="Hacking" />
      <BodyWrapper>
        <PostContent>
          <h1>100 days of...</h1>
          <GridWrapper>
            <div className="link">
              <Link to="/hundred-days-of/blockchain">
                <Img fluid={data.blockchain.childImageSharp.fluid} />
                <h2>Blockchain</h2>
              </Link>
            </div>
          </GridWrapper>
        </PostContent>
      </BodyWrapper>
    </Layout>
  )
}

const GridWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: ${px2vw(20)};
  margin-bottom: ${px2vw(40)};
`

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
