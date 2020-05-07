import React from "react"
import Layout from "./layout"
import { graphql } from "gatsby"
import { MarkdownRemark } from "../graphqlTypes"
import PostContent from "./post-content"
import BodyWrapper from "./shared/BodyWrapper"
import "./styles.css"

interface PostProps {
  data: {
    markdownRemark: MarkdownRemark
  }
}
const PostLayout: React.SFC<PostProps> = ({ data }) => {
  const { markdownRemark } = data

  if (!markdownRemark.frontmatter || !markdownRemark.html) {
    return <p>Nope</p>
  }

  return (
    <Layout>
      <BodyWrapper>
        <PostContent>
          <h1>{markdownRemark.frontmatter.title}</h1>
          <div
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
  query PostQuery($slug: String!) {
    markdownRemark(frontmatter: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        date
      }
    }
  }
`

export default PostLayout
