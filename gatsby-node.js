const path = require("path")

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions

  const securityPosts = graphql(`
    query {
      allMarkdownRemark(
        limit: 100
        sort: { fields: [frontmatter___date], order: DESC }
        filter: { fileAbsolutePath: { regex: "/src/hacking-posts/" } }
      ) {
        edges {
          node {
            frontmatter {
              slug
            }
          }
        }
      }
    }
  `).then(result => {
    result.data.allMarkdownRemark.edges.forEach(({ node }) => {
      createPage({
        path: `/hacking${node.frontmatter.slug}`,
        component: path.resolve("./src/components/post-layout.tsx"),
        context: {
          slug: node.frontmatter.slug,
        },
      })
    })
  })

  const hundredAppSecPosts = graphql(`
    query {
      allMarkdownRemark(
        limit: 100
        sort: { fields: [frontmatter___date], order: DESC }
        filter: {
          fileAbsolutePath: { regex: "/src/hundred-days-posts/app-sec/" }
        }
      ) {
        edges {
          node {
            frontmatter {
              slug
            }
          }
        }
      }
    }
  `).then(result => {
    result.data.allMarkdownRemark.edges.forEach(({ node }) => {
      createPage({
        path: `/hundred-days-of/app-sec${node.frontmatter.slug}`,
        component: path.resolve("./src/components/post-layout.tsx"),
        context: {
          slug: node.frontmatter.slug,
        },
      })
    })
  })

  const posts = graphql(`
    query {
      allMarkdownRemark(
        limit: 100
        sort: { fields: [frontmatter___date], order: DESC }
        filter: { fileAbsolutePath: { regex: "/src/posts/" } }
      ) {
        edges {
          node {
            frontmatter {
              slug
            }
          }
        }
      }
    }
  `).then(result => {
    result.data.allMarkdownRemark.edges.forEach(({ node }) => {
      createPage({
        path: `/posts${node.frontmatter.slug}`,
        component: path.resolve("./src/components/post-layout.tsx"),
        context: {
          slug: node.frontmatter.slug,
        },
      })
    })
  })

  return Promise.all([securityPosts, posts])
}
