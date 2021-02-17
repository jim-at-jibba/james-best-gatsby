import React from "react"
import Layout from "./layout"
import { graphql } from "gatsby"
import { MarkdownRemark } from "../graphqlTypes"
import PostContent from "./post-content"
import BodyWrapper from "./shared/BodyWrapper"
import "./styles.css"
import styled, { css } from "../utils/styled-components"

interface PostProps {
  data: {
    markdownRemark: MarkdownRemark
  }
}
const HundredDaysLayout: React.SFC<PostProps> = ({ data }) => {
  const { markdownRemark } = data

  if (!markdownRemark.frontmatter || !markdownRemark.html) {
    return <p>Nope</p>
  }

  return (
    <Layout>
      <BodyWrapper>
        <PostContent>
          <h1>{markdownRemark.frontmatter.title}</h1>
          <Date>
            <p>{markdownRemark.frontmatter.date}</p>{" "}
            <span style={{ color: "#45f9e5" }}>◇</span>{" "}
            <p>{markdownRemark.timeToRead} mins</p>
          </Date>
          <div
            className="markdownWrapper"
            dangerouslySetInnerHTML={{
              __html: markdownRemark.html,
            }}
          />
        </PostContent>
      </BodyWrapper>
    </Layout>
  )
}

export const query = graphql`
  query HundredDayPostQuery($slug: String!) {
    markdownRemark(frontmatter: { slug: { eq: $slug } }) {
      html
      timeToRead
      frontmatter {
        title
        slug
        date(formatString: "MMMM DD, YYYY")
        short
        featuredImage {
          childImageSharp {
            fluid(maxWidth: 1080) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`

const Date = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: row;
    color: ${theme.fonts.colors.primary};
    p {
      padding: 0;
      margin: 0;
      font-size: ${theme.fonts.sizes.sm};
    }
    span {
      font-size: ${theme.fonts.sizes.sm};
      margin: 0 8px;
    }
  `}
`
export default HundredDaysLayout
