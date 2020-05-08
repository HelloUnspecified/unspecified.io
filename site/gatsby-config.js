module.exports = {
  siteMetadata: {
    title: `Unspecified`,
    description: `so.much,awesome.`,
    author: `Clark Sell, Sara Gibbons`,
  },
  plugins: [
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "UA-21705613-10",
        head: true,
      },
    },
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-styled-components`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-plugin-scroll-reveal`,
      options: {
        threshold: 0.25,
      },
    },
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Unspecified`,
        short_name: `unspecified`,
        start_url: `/`,
        background_color: `#242E3C`,
        theme_color: `#242E3C`,
        display: `minimal-ui`,
        icons: [
          {
            src: `/icons/16x16.png`,
            sizes: `16x16`,
            type: `image/png`,
          },
          {
            src: `/icons/32x32.png`,
            sizes: `32x32`,
            type: `image/png`,
          },
          {
            src: `/icons/96x96.png`,
            sizes: `96x96`,
            type: `image/png`,
          },
          {
            src: `/icons/128x128.png`,
            sizes: `128x128`,
            type: `image/png`,
          },
          {
            src: `/icons/256x256.png`,
            sizes: `256x256`,
            type: `image/png`,
          },
          {
            src: `/icons/512x512.png`,
            sizes: `512x512`,
            type: `image/png`,
          },
        ],
      },
    },
    {
      resolve: "gatsby-source-sanity",
      options: {
        projectId: "89gr91ne",
        dataset: "production",

        // a token with read permissions is required
        // if you have a private dataset
        // token: process.env.MY_SANITY_TOKEN,
        // token: "bacon",

        // If the Sanity GraphQL API was deployed using `--tag <name>`,
        // use `graphqlTag` to specify the tag name. Defaults to `default`.
        // graphqlTag: "default",
      },
    },
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [`coda:400,800`, `lato:400,800`],
        display: "swap",
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `markdown-pages`,
        path: `${__dirname}/src/markdown-pages`,
      },
    },
    `gatsby-transformer-remark`,
    `gatsby-plugin-loadable-components-ssr`,
  ],
}
