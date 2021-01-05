import React, { FC, useEffect, useRef, useState } from 'react';
import { LineItem } from 'shopify-buy';
import styled from '@emotion/styled';
import { MdShoppingCart, MdCreditCard } from 'react-icons/md';

import CartItem from './CartItem';
import {
  darkAccentColor,
  primaryColor,
  secondaryColor,
  secondaryColorHover,
} from '../utils/style/colorscheme';
import { rhythm } from '../utils/style/typography';
import { tabletPortrait768 } from '../utils/style/breakpoints';

const MsgWrapper = styled.div<{ show: boolean }>`
  display: ${({ show }) => (show ? `block` : `none`)};
  margin-top: 1.4em;
  text-align: center;
  transition: display ease-in-out 5s;

  p {
    margin: 0;
  }
`;

const CartMsg = styled.p<{ isAdding: boolean }>`
  color: ${({ isAdding }) => (isAdding ? `#66cd00` : `#ee2c2c`)};
`;

const CartButton = styled.button<{ isActive: boolean }>`
  margin: 1em 0 0 0;
  width: 100%;
  border: none;
  border-radius: 10px;
  background-color: ${({ isActive }) =>
    isActive ? secondaryColorHover : darkAccentColor};
  color: ${({ isActive }) =>
    isActive ? darkAccentColor : secondaryColorHover};
  transition: background-color ease-in-out 0.3s, color ease-in-out 0.3s;
  font-size: ${rhythm(0.7)};

  &:hover {
    background-color: ${secondaryColorHover};
    color: ${darkAccentColor};
    cursor: pointer;
  }

  ${tabletPortrait768} {
    font-size: ${rhythm(0.8)};
  }
`;

const CartContainer = styled.div`
  margin-bottom: 1.5em;
  overflow: hidden;
  transition: max-height 0.6s ease;

  h3 {
    text-align: center;
  }

  hr {
    border: 1px solid ${primaryColor};
  }

  #empty {
    text-align: center;
  }
`;

const CartContentHeader = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr 1fr;
  text-align: center;
  border-bottom: white 1px solid;
`;

const CheckoutBtnWrapper = styled.div`
  width: 100%;

  button {
    width: 100%;
    border: none;
    background-color: ${darkAccentColor};
    color: ${secondaryColor};
    transition: background-color ease-in-out 0.3s, color ease-in-out 0.3s;

    &:hover {
      background-color: ${secondaryColorHover};
      color: ${darkAccentColor};
      cursor: pointer;
    }
  }
`;

type CartProps = {
  itemsInCart: LineItem[];
  variants: any[];
  total: string;
  itemCount: number;
  isAdding: boolean;
  isDeleting: boolean;
  removeFromCart: (string) => void;
  updateCart: (string) => void;
  goToCheckout: () => void;
};

const Cart: FC<CartProps> = ({
  itemsInCart,
  variants,
  total,
  itemCount,
  isAdding,
  isDeleting,
  removeFromCart,
  updateCart,
  goToCheckout,
}) => {
  const [active, toggleActive] = useState(false);
  const cartRef = useRef(null);

  const getItemImage = (variantId) => {
    const variant = variants.find((variant) => variant.shopifyId === variantId);
    return variant ? variant.image.localFile.sharp.fluid : null;
  };

  const getItemInventory = (variantId) => {
    const variant = variants.find((variant) => variant.shopifyId === variantId);
    return variant ? variant.quantityAvailable : null;
  };

  useEffect(() => {
    cartRef.current.style.maxHeight = active
      ? `${cartRef.current.scrollHeight}px`
      : `0px`;
  }, [active, cartRef, itemsInCart]);

  return (
    <>
      <MsgWrapper show={isAdding || isDeleting}>
        {isAdding && <CartMsg isAdding={true}>Item added to cart</CartMsg>}
        {isDeleting && (
          <CartMsg isAdding={false}>Item removed from cart</CartMsg>
        )}
      </MsgWrapper>
      <CartButton isActive={active} onClick={() => toggleActive(!active)}>
        <MdShoppingCart /> {itemCount}
      </CartButton>
      <CartContainer ref={cartRef}>
        <h3>Your Cart</h3>
        <p>
          <strong>Total:</strong> {total}
        </p>
        <hr />
        {itemsInCart.length ? (
          <>
            <CartContentHeader>
              <p>Item</p>
              <p>Price</p>
              <p>Quantity</p>
            </CartContentHeader>
            {itemsInCart.map((item) => (
              <CartItem
                key={item.id}
                item={item}
                getItemImage={getItemImage}
                getItemInventory={getItemInventory}
                updateCart={updateCart}
                removeFromCart={removeFromCart}
              />
            ))}
          </>
        ) : (
          <p id="empty">Your cart is looking pretty empty</p>
        )}
        <CheckoutBtnWrapper>
          <button onClick={() => goToCheckout()}>
            Checkout <MdCreditCard />
          </button>
        </CheckoutBtnWrapper>
      </CartContainer>
    </>
  );
};

export default Cart;
