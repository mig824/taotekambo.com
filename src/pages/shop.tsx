import React from 'react';
import { graphql } from 'gatsby';
import styled from '@emotion/styled';

import SEO from '../components/SEO';
import Cart from '../components/Cart';
import Product from '../components/Product';
import {
  useAddItemToCart,
  useCartItemCount,
  useCartItems,
  useCartTotalCost,
  useCheckout,
  useIsAdding,
  useIsDeleting,
  useRemoveItemFromCart,
  useUpdateCart,
} from '../utils/context/storeContext';
import {
  mobileLandscape480,
  tabletPortrait768,
} from '../utils/style/breakpoints';

const CartContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  width: 90%;
  max-width: 600px;
  margin-top: 5.2em;

  ${mobileLandscape480} {
    width: 90%;
  }
`;

const ProductsContainer = styled.div<{ productCount: number }>`
  display: grid;
  grid-template-columns: 1fr;
  gap: 3em;
  width: 70vw;
  max-width: 600px;
  margin-bottom: 4em;

  ${mobileLandscape480} {
    grid-template-columns: ${({ productCount }) =>
      productCount % 2 === 0
        ? `repeat(${productCount > 6 ? 4 : 2}, 1fr)`
        : `repeat(${productCount > 1 ? 3 : 1}, 1fr)`};
    width: 90vw;
    gap: 1em;
  }

  ${tabletPortrait768} {
    gap: 2em;
  }
`;

const ShopPage = ({ data: { products, variants } }) => {
  const lineItems = useCartItems();
  const itemCount = useCartItemCount();
  const { total } = useCartTotalCost();
  const isAdding: boolean = useIsAdding();
  const isDeleting: boolean = useIsDeleting();
  const addItemToCart = useAddItemToCart();
  const updateCart = useUpdateCart();
  const removeFromCart = useRemoveItemFromCart();
  const goToCheckout = useCheckout();

  return (
    <>
      <SEO title="Shop" />
      <CartContainer>
        <Cart
          variants={variants.nodes}
          itemsInCart={lineItems}
          total={total}
          itemCount={itemCount}
          isAdding={isAdding}
          isDeleting={isDeleting}
          removeFromCart={removeFromCart}
          updateCart={updateCart}
          goToCheckout={goToCheckout}
        />
      </CartContainer>
      <ProductsContainer productCount={products.nodes.length}>
        {products.nodes.map((product) => (
          <Product
            product={product}
            addToCart={addItemToCart}
            key={product.id}
          />
        ))}
      </ProductsContainer>
    </>
  );
};

export const query = graphql`
  query ShopPageQuery {
    products: allShopifyProduct {
      nodes {
        id
        title
        handle
        description
        totalInventory
        variants {
          shopifyId
          title
          availableForSale
          quantityAvailable
          priceV2 {
            amount
            currencyCode
          }
        }
        images {
          localFile {
            sharp: childImageSharp {
              fluid {
                ...GatsbyImageSharpFluid_withWebp
              }
            }
          }
        }
      }
    }
    variants: allShopifyProductVariant {
      nodes {
        shopifyId
        quantityAvailable
        image {
          localFile {
            sharp: childImageSharp {
              fluid(fit: CONTAIN) {
                ...GatsbyImageSharpFluid_withWebp
              }
            }
          }
        }
      }
    }
  }
`;

export default ShopPage;
