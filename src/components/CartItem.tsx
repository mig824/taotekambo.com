import React, {
  useState,
  useEffect,
  useCallback,
  useRef,
  FunctionComponent,
  MutableRefObject,
} from 'react';
import styled from '@emotion/styled';
import Img from 'gatsby-image';
import { MdAdd, MdRemove } from 'react-icons/md';

import { rhythm } from '../utils/style/typography';
import { secondaryColor } from '../utils/style/colorscheme';
import {
  mobileLandscape480,
  tabletPortrait768,
} from '../utils/style/breakpoints';

const ItemWrapper = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr 2fr;
  justify-items: center;
  align-items: center;
  text-align: center;
  padding: 1em 0;

  #item-name-and-image {
    display: flex;
    justify-self: flex-start;

    #item-name {
      display: flex;
      flex-direction: column;
      justify-content: space-between;

      ${mobileLandscape480} {
        flex-direction: row;
      }

      p {
        padding: 10px 0 0 10px;
        margin: 0;

        ${mobileLandscape480} {
          margin: 0 1em 1em 0;
        }
      }

      small {
        padding: 0.5em 0 0 0;
        color: ${secondaryColor};

        ${mobileLandscape480} {
          margin-left: 1em;
        }
      }
    }

    button {
      background-color: transparent;
      border: none;
      color: #b3aeae;
      font-size: ${rhythm(0.5)};
      width: 100%;
      text-align: left;

      &:hover {
        text-decoration: underline;
      }
    }
  }
`;

const ImgWrapper = styled.div`
  width: 5em;
  height: 5em;
  overflow: hidden;
`;

const QuantityWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;

  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  input {
    -moz-appearance: textfield;
    text-align: center;
    color: ${secondaryColor};
    background-color: transparent;
    border: none;
    font-size: ${rhythm(0.75)};
    z-index: 5;
  }

  button {
    display: flex;
    justify-content: center;
    align-items: center;
    color: ${secondaryColor};
    background-color: transparent;
    border: none;
    font-size: ${rhythm(0.55)};
    width: 1rem;
    height: 1rem;

    &:hover {
      cursor: pointer;
    }

    .icon {
      margin: auto;
      padding: auto;
    }
  }

  ${mobileLandscape480} {
    button {
      font-size: ${rhythm(0.65)};
      padding: 0 1rem;
    }
  }

  ${tabletPortrait768} {
    button {
      font-size: ${rhythm(0.75)};
    }
  }
`;

type CartItemProps = {
  item: any;
  getItemImage: (id: string) => any | null;
  getItemInventory: (id: string) => number | null;
  removeFromCart: (id: string) => void;
  updateCart: (id: string, quantity: number) => void;
};

const CartItem: FunctionComponent<CartItemProps> = ({
  item,
  getItemImage,
  getItemInventory,
  removeFromCart,
  updateCart,
}) => {
  const [quantity, setQuantity] = useState(item.quantity);
  const quantityRef: MutableRefObject<HTMLInputElement> = useRef(null);
  const max = getItemInventory(item.variant.id);

  useEffect((): void => {
    setQuantity(item.quantity);
  }, [item]);

  const handleIncrement = useCallback((): void => {
    const val = Number(quantityRef.current.value);
    if (val >= max) {
      return;
    }
    setQuantity(val + 1);
    updateCart(item.id, val + 1);
  }, [quantityRef.current]);

  const handleDecrement = useCallback((): void => {
    const val = Number(quantityRef.current.value);
    if (val <= 1) {
      return;
    }
    setQuantity(val - 1);
    updateCart(item.id, val - 1);
  }, [quantityRef.current]);

  return (
    <ItemWrapper>
      <div id="item-name-and-image">
        <ImgWrapper>
          <Img fluid={getItemImage(item.variant.id)} />
        </ImgWrapper>
        <div>
          <div id="item-name">
            <p>{item.title}</p>
            <small>
              {item.variant.title !== `Default Title` && item.variant.title}
            </small>
          </div>
          <button onClick={() => removeFromCart(item.id)}>Remove</button>
        </div>
      </div>
      <p>{`$${Number(item.variant.priceV2.amount).toFixed(2)}`}</p>
      <QuantityWrapper>
        <button onClick={() => handleDecrement()}>
          <span className="icon">
            <MdRemove />
          </span>
        </button>
        <input
          type="number"
          min={1}
          max={max}
          value={quantity}
          ref={quantityRef}
          disabled={true}
        />
        <button onClick={() => handleIncrement()}>
          <span className="icon">
            <MdAdd />
          </span>
        </button>
      </QuantityWrapper>
    </ItemWrapper>
  );
};

export default CartItem;
