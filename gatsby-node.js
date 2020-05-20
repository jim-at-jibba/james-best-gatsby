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
