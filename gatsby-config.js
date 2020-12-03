require("dotenv").config()

module.exports = {
  flags: {
    PRESERVE_WEBPACK_CACHE: true,
    FAST_REFRESH: true,
    FAST_DEV: true,
  },
  siteMetadata: {
    title: `Zuckermaus Bakery`,
    description: `Bakery`,
    author: `@Zellement`,
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
    `gatsby-plugin-postcss`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: "gatsby-plugin-snipcart-advanced",
      options: {
        publicApiKey: process.env.SNIPCART_API,
        defaultLang: "en",
        provideDefaultCurrency: false,
        currency: "gbp",
        openCartOnAdd: false,
      },
    },
    {
      resolve: `gatsby-source-datocms`,
      options: {
        apiToken: process.env.DATO_API,
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
        icon: `src/images/gatsby-icon.png`,
      },
    },
  ],
}
