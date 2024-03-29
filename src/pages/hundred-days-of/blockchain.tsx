import React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"

import Layout from "../../components/layout"
import SEO from "../../components/seo"
import BodyWrapper from "../../components/shared/BodyWrapper"
import PostContent from "../../components/post-content"
import styled, { css } from "../../utils/styled-components"
import spacing from "../../utils/spacing"
import mediaQueries from "../../utils/media-queries"
import px2vw from "../../utils/px2vw"

const PostRow: React.SFC<{ post: any }> = ({ post }) => {
  const { node } = post
  const { timeToRead, frontmatter } = node
  return (
    <StyledLink to={`/hundred-days-of/blockchain${frontmatter.slug}`}>
      <Row>
        <Left>
          <h2>{frontmatter.title}</h2>
          <p className="excerpt">{frontmatter.short}</p>
          <div className="dateTime">
            <p>{frontmatter.date}</p>{" "}
            <span style={{ color: "#45f9e5" }}>◇</span> <p>{timeToRead} mins</p>
          </div>
        </Left>
      </Row>
    </StyledLink>
  )
}

const StyledLink = styled(Link)`
  ${() => css`
    display: flex;
    flex: 1;
    margin: 8px;
  `}
`
const Row = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex: 1;
    flex-direction: column-reverse;

    p {
      font-weight: normal;
    }
    p.excerpt {
      display: none;
      color: ${theme.fonts.colors.secondary};
      padding-bottom: ${spacing(16)}px;

      ${mediaQueries("md")`display: block`}
    }

    ${mediaQueries("md")(`
      flex-direction: row;
      justify-content: space-between;
    `)}
  `}
`
const Left = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex: 1;
    flex-direction: column;

    h2 {
      font-weight: 700;
      margin-bottom: 0;
    }
    p {
      padding: 0;
      margin: 0;
    }

    .dateTime {
      display: flex;
      flex-direction: row;
      color: ${theme.fonts.colors.primary};
      p {
        font-size: ${theme.fonts.sizes.sm};
      }
      span {
        font-size: ${theme.fonts.sizes.sm};
        margin: 0 8px;
      }
    }
  `}
`
const BlockchainPage = () => {
  const { allMarkdownRemark } = useStaticQuery(graphql`
    query BlockchainPostsQuery {
      allMarkdownRemark(
        limit: 100
        sort: { order: DESC, fields: [frontmatter___date] }
        filter: {
          fileAbsolutePath: { regex: "/src/hundred-days-posts/blockchain/" }
        }
      ) {
        edges {
          node {
            timeToRead
            frontmatter {
              title
              slug
              date(formatString: "MMMM DD, YYYY")
              short
            }
          }
        }
      }
    }
  `)

  console.log("DATA", allMarkdownRemark)
  return (
    <Layout>
      <SEO title="Blockchain" />
      <BodyWrapper>
        <PostContent>
          <h1>Blockchain</h1>
          <StyledSection>
            {allMarkdownRemark?.edges &&
              allMarkdownRemark.edges.map((post: any) => {
                return <PostRow key={post} post={post} />
              })}
          </StyledSection>
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

export default BlockchainPage
