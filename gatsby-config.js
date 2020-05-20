module.exports = {
  siteMetadata: {
    title: `James Best | Software Engineer | Hacker | Maker`,
    description: `A Bristol based software engineer.`,
    author: `@jimgbest`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `posts`,
        path: `${__dirname}/src/posts`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: "gatsby-remark-embed-video",
            options: {
              beginMarker: `[[`,
              endMarker: `]]`,
              width: 880,
              ratio: 1.77,
              height: 400,
              related: false,
              noIframeBorder: true,
              urlOverrides: [
                {
                  id: "youtube",
                  embedURL: videoId =>
                    `https://www.youtube-nocookie.com/embed/${videoId}`,
                },
              ],
              containerClass: "embedVideo-container",
            },
          },
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 820,
            },
          },
          `gatsby-remark-prismjs`,
        ],
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-typescript`,
    `gatsby-plugin-styled-components`,
    `gatsby-background-image`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `James Best`,
        short_name: `James Best`,
        start_url: `/`,
        background_color: `#45f9e5`,
        theme_color: `#45f9e5`,
        display: `minimal-ui`,
        icon: `src/images/favicon.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: "gatsby-plugin-web-font-loader",
      options: {
        custom: {
          families: ["Dank Mono"],
          urls: ["/fonts/fonts.css"],
        },
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
