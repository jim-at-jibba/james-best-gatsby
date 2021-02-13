const path = require("path")

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions

  return new Promise((resolve, reject) => {
    graphql(`
      {
        allMarkdownRemark(
          limit: 100
          sort: { fields: [frontmatter___date], order: DESC }
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
    `).then(results => {
      results.data.allMarkdownRemark.edges.forEach(({ node }) => {
        createPage({
          path: `/posts${node.frontmatter.slug}`,
          component: path.resolve("./src/components/post-layout.tsx"),
          context: {
            slug: node.frontmatter.slug,
          },
        })
      })
      resolve()
    })
  })
}

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
