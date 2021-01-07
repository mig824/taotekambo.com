module.exports = `
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
      `;
