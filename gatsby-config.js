require('dotenv').config();
const newShopifyQuery = require('./utils/updated-shopify-query');

module.exports = {
  siteMetadata: {
    title: `Tao Te Kambo`,
    description: `All about Tao Te Kambo -- Learn about kambo and how you can attend a ceremony.`,
    author: `Miguel Michel`,
    companyInfo: {
      owner: `Scott Polhill`,
      email: `taotekambo@gmail.com`,
      phone: `+1 (951) 395 4372`,
      homebase: `2081 261st St., Lomita, CA 90717`,
    },
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/utils/assets`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `data`,
        path: `${__dirname}/src/utils/data`,
      },
    },
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: process.env.CONTENTFUL_SPACE_ID,
        accessToken: process.env.CONTENTFUL_TOKEN,
      },
    },
    {
      resolve: `gatsby-source-shopify`,
      options: {
        shopName: process.env.SHOPIFY_STORE_NAME,
        accessToken: process.env.SHOPIFY_TOKEN,
        includeCollections: [`shop`],
        shopifyQueries: {
          products: newShopifyQuery,
        },
      },
    },
    {
      resolve: `gatsby-source-instagram`,
      options: {
        username: `3619554129`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-transformer-remark`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-anchor-links`,
    `gatsby-plugin-webpack-bundle-analyser-v2`,
    {
      resolve: `gatsby-plugin-react-leaflet`,
      options: {
        linkStyles: true,
      },
    },
    {
      resolve: `gatsby-plugin-env-variables`,
      options: {
        allowList: [
          `SHOPIFY_TOKEN`,
          `SHOPIFY_STORE_NAME`,
          `CONTENTFUL_SPACE_ID`,
          `CONTENTFUL_TOKEN`,
        ],
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Tao Te Kambo`,
        short_name: `Tao Te Kambo`,
        start_url: `/`,
        background_color: `#2f4f4f`,
        theme_color: `#2f4f4f`,
        display: `minimal-ui`,
        icon: `src/utils/assets/favicon.png`,
      },
    },
    {
      resolve: 'gatsby-plugin-typography',
      options: {
        pathToConfigModule: 'src/utils/style/typography',
      },
    },
    `gatsby-plugin-offline`,
  ],
};
