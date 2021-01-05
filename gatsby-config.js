require('dotenv').config();
module.exports = {
  siteMetadata: {
    title: `Tao Te Kambo`,
    description: `Website for TaoTe Kambo`,
    author: `Miguel Michel`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `utils`,
        path: `${__dirname}/src/utils`,
      },
    },
    {
      resolve: `gatsby-source-strapi`,
      options: {
        apiURL: process.env.API_URL || `http://localhost:1337`,
        queryLimit: 1000, // Default to 100
        singleTypes: ['company-info', 'landing-page', 'learn-page'],
        contentTypes: ['events', `posts`, 'testimonials'],
      },
    },
    {
      resolve: 'gatsby-source-shopify',
      options: {
        shopName: process.env.SHOPIFY_STORE_NAME,
        accessToken: process.env.SHOPIFY_TOKEN,
        includeCollections: ['shop'],
        shopifyQueries: {
          products: `
            query GetProducts($first: Int!, $after: String) {
              products(first: $first, after: $after) {
                pageInfo {
                  hasNextPage
                }
                edges {
                  cursor
                  node {
                    availableForSale
                    totalInventory
                    createdAt
                    description
                    handle
                    id
                    images(first: 250) {
                      edges {
                        node {
                          id
                          altText
                          originalSrc
                        }
                      }
                    }
                    metafields(first: 250) {
                      edges {
                        node {
                          description
                          id
                          key
                          namespace
                          value
                          valueType
                        }
                      }
                    }
                    options {
                      id
                      name
                      values
                    }
                    priceRange {
                      minVariantPrice {
                        amount
                        currencyCode
                      }
                      maxVariantPrice {
                        amount
                        currencyCode
                      }
                    }
                    productType
                    publishedAt
                    tags
                    title
                    updatedAt
                    variants(first: 250) {
                      edges {
                        node {
                          availableForSale
                          quantityAvailable
                          compareAtPrice
                          compareAtPriceV2 {
                            amount
                            currencyCode
                          }
                          id
                          image {
                            altText
                            id
                            originalSrc
                          }
                          metafields(first: 250) {
                            edges {
                              node {
                                description
                                id
                                key
                                namespace
                                value
                                valueType
                              }
                            }
                          }
                          price
                          priceV2 {
                            amount
                            currencyCode
                          }
                          requiresShipping
                          selectedOptions {
                            name
                            value
                          }
                          sku
                          title
                          weight
                          weightUnit
                        }
                      }
                    }
                    vendor
                  }
                }
              }
            }
          `,
        },
      },
    },
    `gatsby-transformer-sharp`,
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
        allowList: [`SHOPIFY_TOKEN`, `SHOPIFY_STORE_NAME`, `API_URL`],
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Tao Te Kambo`,
        short_name: `Tao Te Kambo`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
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
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
};
