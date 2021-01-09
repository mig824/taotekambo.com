/** @jsx jsx */
import React from 'react';
import { graphql } from 'gatsby';
import { LineItem } from 'shopify-buy';
import styled from '@emotion/styled';
import { jsx, css, keyframes } from '@emotion/react';

import SEO from '../components/SEO';
import Cart from '../components/Cart';
import ShopItem from '../components/Product';
import ScrollTopArrow from '../components/ScrollTopArrow';
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
import { mobileLandscape480 } from '../utils/style/breakpoints';
import {
  darkAccentColor,
  mainTextColor,
  secondaryColor,
} from '../utils/style/colorscheme';

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
  display: flex;
  flex-direction: column;
  width: 80vw;
  max-width: 600px;
  margin-bottom: 4rem;

  ${mobileLandscape480} {
    justify-content: center;
    align-items: center;
    width: 90vw;
  }
`;

const MsgWrapper = styled.div<{ show: boolean }>`
  display: ${({ show }) => (show ? `block` : `none`)};
  position: fixed;
  bottom: -5%;
  right: 0;
  left: 0;
  z-index: 100;
  margin: auto;
  background-color: ${darkAccentColor};
  color: ${mainTextColor};
  width: fit-content;
  text-align: center;
  border: 1px solid ${secondaryColor};
`;

const CartMsg = styled.p<{ isAdding?: boolean }>`
  color: ${({ isAdding }) => (isAdding ? `#66cd00` : `#ee2c2c`)};
  padding: 1rem 3rem;
  margin: 0;
`;

const popup = keyframes`
  100% {
    transform: translateY(-100%);
  }
`;

const ShopPage = ({ data: { products, variants } }) => {
  const lineItems: LineItem[] = useCartItems();
  const itemCount: number = useCartItemCount();
  const { total }: { total: string } = useCartTotalCost();
  const isAdding: boolean = useIsAdding();
  const isDeleting: boolean = useIsDeleting();
  const addItemToCart: () => Promise<void> = useAddItemToCart();
  const updateCart: () => Promise<void> = useUpdateCart();
  const removeFromCart: () => Promise<void> = useRemoveItemFromCart();
  const goToCheckout: () => Window = useCheckout();

  return (
    <>
      <SEO
        title="Shop"
        description="Check out what products I have available."
      />
      <CartContainer>
        <Cart
          variants={variants.nodes}
          itemsInCart={lineItems}
          total={total}
          itemCount={itemCount}
          removeFromCart={removeFromCart}
          updateCart={updateCart}
          goToCheckout={goToCheckout}
        />
      </CartContainer>
      <ProductsContainer productCount={products.nodes.length}>
        {products.nodes.map((product) => (
          <ShopItem
            product={product}
            addToCart={addItemToCart}
            key={product.id}
          />
        ))}
      </ProductsContainer>
      <MsgWrapper
        show={isAdding || isDeleting}
        css={css`
          animation: ${popup} 0.5s ease forwards;
        `}
      >
        {isAdding && <CartMsg isAdding={true}>Item added to cart</CartMsg>}
        {isDeleting && (
          <CartMsg isAdding={false}>Item removed from cart</CartMsg>
        )}
      </MsgWrapper>
      <ScrollTopArrow showBelow={500} />
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
          options: selectedOptions {
            name
          }
          priceV2 {
            amount
            currencyCode
          }
        }
        images {
          localFile {
            sharp: childImageSharp {
              fluid(maxWidth: 450, maxHeight: 450) {
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
              fluid(fit: COVER, maxWidth: 50, maxHeight: 50) {
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
