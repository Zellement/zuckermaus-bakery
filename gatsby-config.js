require("dotenv").config()

module.exports = {
  siteMetadata: {
    title: `Zuckermaus Bakery`,
    description: `Bakery`,
    author: `@Zellement`,
    siteUrl: `https://www.zuckermausbakery.com`,
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
    `gatsby-plugin-image`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-postcss`,
    `gatsby-plugin-sharp`,
    {
      resolve: "gatsby-plugin-react-leaflet",
      options: {
        linkStyles: true, // (default: true) Enable/disable loading stylesheets via CDN
      },
    },
    {
      resolve: "gatsby-plugin-react-svg",
      options: {
        rule: {
          include: /images/,
        },
      },
    },
    {
      resolve: `gatsby-plugin-google-gtag`,
      options: {
        // You can add multiple tracking ids and a pageview event will be fired for all of them.
        trackingIds: [
          "G-EQ6X9LYQDE", // Google Analytics / GA
        ],
      },
    },
    // {
    //   resolve: `gatsby-plugin-google-analytics`,
    //   options: {
    //     // The property ID; the tracking code won't be generated without it
    //     trackingId: "G-EQ6X9LYQDE",
    //   },
    // },
    "gatsby-plugin-robots-txt",
    {
      resolve: `gatsby-plugin-gdpr-cookies`,
      options: {
        googleAnalytics: {
          trackingId: "", // leave empty if you want to disable the tracker
          cookieName: "gatsby-gdpr-google-analytics", // default
          anonymize: true, // default
          allowAdFeatures: false, // default
        },
        googleTagManager: {
          trackingId: "", // leave empty if you want to disable the tracker
          cookieName: "gatsby-gdpr-google-tagmanager", // default
          dataLayerName: "dataLayer", // default
        },
        facebookPixel: {
          pixelId: "", // leave empty if you want to disable the tracker
          cookieName: "gatsby-gdpr-facebook-pixel", // default
        },
        // defines the environments where the tracking should be available  - default is ["production"]
        environments: ["production", "development"],
      },
    },
    // {
    //   resolve: `gatsby-source-instagram-all`,
    //   options: {
    //     access_token: process.env.INSTAGRAM_ACCESS,
    //   },
    // },
    {
      resolve: "gatsby-plugin-snipcart-advanced",
      options: {
        version: "3.0.30",
        publicApiKey: process.env.SNIPCART_API,
        defaultLang: "en",
        provideDefaultCurrency: false,
        currency: "gbp",
        openCartOnAdd: false,
        templatesUrl: "/snipcart/index.js",
        locales: {
          en: {
            payment: {
              form: {
                card_label: "Debit or Credit Card"
              }
            },
          },
        },
      },
    },
    {
      resolve: "gatsby-plugin-mailchimp",
      options: {
        endpoint: process.env.MAILCHIMP, // string; add your MC list endpoint here; see instructions below
        timeout: 3500, // number; the amount of time, in milliseconds, that you want to allow mailchimp to respond to your request before timing out. defaults to 3500
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
        name: `zuckermaus-bakery`,
        short_name: `zuckermaus`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/zuckermaus-favicon.png`,
      },
    },
  ],
}
