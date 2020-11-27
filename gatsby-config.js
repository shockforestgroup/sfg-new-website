module.exports = {
  siteMetadata: {
    title: `SFG`,
    description: `Shock Forest Group`,
    author: `@alexabruck`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `blogcontent`,
        path: `${__dirname}/content`,
      },
    },
    /* gatsby-plugin-sharp: wrapper of Sharp img processing lib, this plugin is a low-level helper plugin 
    generally used by other Gatsby plugins, e.g. gatsby-remark-images below */
    `gatsby-plugin-sharp`,
    /* gatsby-transformer-sharp: Creates ImageSharp nodes from image types that are supported by the Sharp 
    image processing library and provides fields in their GraphQL types for processing your images */
    `gatsby-transformer-sharp`,
    {
      resolve: "gatsby-transformer-remark",
      options: {
        plugins: [
          {
            resolve: "gatsby-remark-relative-images",
            options: {
              name: "uploads",
            },
          },
          {
            /* gatsby-remark-images: Processes images in markdown so they can be used in the production build. 
            This dep needs gatsby-plugin-sharp */
            resolve: "gatsby-remark-images",
            options: {
              // It's important to specify the maxWidth (in pixels) of
              // the content container as this plugin uses this as the
              // base for generating different widths of each image.
              maxWidth: 800,
              linkImagesToOriginal: false,
            },
          },
          {
            resolve: "gatsby-remark-copy-linked-files",
            options: {
              destinationDir: "static",
            },
          },
        ],
      },
    },
    {
      resolve: "gatsby-plugin-netlify-cms",
      options: {
        modulePath: `${__dirname}/src/cms/cms.js`,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
    "gatsby-plugin-netlify", // make sure to keep it last in the array
  ],
}
