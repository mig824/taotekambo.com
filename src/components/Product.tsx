import React, { useState } from 'react';
import BackgroundImg from 'gatsby-background-image';
import styled from '@emotion/styled';
import { MdAddShoppingCart } from 'react-icons/md';

import {
  mainTextColor,
  primaryColor,
  secondaryColor,
} from '../utils/style/colorscheme';
import { rhythm } from '../utils/style/typography';
import {
  mobileLandscape480,
  tabletPortrait768,
} from '../utils/style/breakpoints';

const ProductWrapper = styled.div`
  display: flex;
  flex-direction: column;
  overflow: hidden;
  width: 100%;
  margin-bottom: 1.5rem;
  border: solid 1px ${secondaryColor};
  border-radius: 10px;
  box-shadow: 0 0 4px 3px #222;
  height: fit-content;

  ${mobileLandscape480} {
    flex-direction: row;
  }
`;

const Img = styled(BackgroundImg)`
  margin: auto;
  border-radius: 10px;
  overflow: hidden;
  justify-self: center;
  width: 100%;
  height: 20rem;
`;

const DetailsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  max-width: 1000px;
  width: 100%;
  text-align: center;
  margin: auto;
  height: 20rem;
  padding: 1rem;

  h3 {
    margin: 1rem 0;
  }

  .price {
    margin: ${rhythm(0.5)} 0;
  }

  hr {
    border: 1px solid ${primaryColor};
    width: 90%;
  }

  select {
    width: 80%;
  }

  label {
    color: ${mainTextColor};
    margin-bottom: 0.4rem;
  }
`;

const SmallText = styled.small<{ isAvailable: boolean }>`
  color: ${({ isAvailable }) => (isAvailable ? '#66cd00' : '#ee2c2c')};
  margin-bottom: ${rhythm(0.5)};
`;

const AddToCartBtn = styled.button`
  width: 80%;
  max-width: 12rem;
  min-width: fit-content;
  font-size: ${rhythm(1)};
  background-color: ${primaryColor};
  color: ${secondaryColor};
  border: none;
  border-radius: 5px;
  outline: none;
  transition: background-color ease-in-out 0.3s, color ease-in-out 0.3s;

  &:hover {
    background-color: ${secondaryColor};
    color: ${primaryColor};
    cursor: pointer;
  }

  ${mobileLandscape480} {
    font-size: ${rhythm(0.75)};
  }

  ${tabletPortrait768} {
    font-size: ${rhythm(1)};
  }
`;

const Product = ({
  product: { title, description, images, variants },
  addToCart,
}) => {
  const [selectedVariant, setSelectedVariant] = useState(variants[0]);

  return (
    <ProductWrapper>
      <Img Tag="div" fluid={images[0].localFile.sharp.fluid} />
      <DetailsWrapper>
        <h3>{title}</h3>
        {variants.length > 1 && (
          <>
            <label htmlFor={`${title}-select`}>
              Choose a{' '}
              {selectedVariant.options.map(({ name }) => name).join('/')}
            </label>
            <select
              id={`${title}-select`}
              defaultValue={variants[0].title}
              onChange={(e) => {
                const variant = variants.find(
                  (v) => v.title === e.target.value
                );
                setSelectedVariant(variant);
              }}
            >
              {variants.map(({ title, shopifyId, availableForSale }) => (
                <option
                  label={`${title}`}
                  value={title}
                  disabled={!availableForSale}
                  key={shopifyId}
                >
                  {title}
                </option>
              ))}
            </select>
          </>
        )}
        <p className="price">
          {`$${Number(selectedVariant.priceV2.amount).toFixed(2)}`}
        </p>
        {selectedVariant.availableForSale ? (
          <SmallText isAvailable={true}>Available</SmallText>
        ) : (
          <SmallText isAvailable={false}>Not Available</SmallText>
        )}
        <hr />
        <p>{description}</p>
        <AddToCartBtn
          title="Add To Cart"
          onClick={() => {
            if (selectedVariant.availableForSale) {
              addToCart(selectedVariant.shopifyId, 1);
            }
          }}
        >
          <MdAddShoppingCart />
        </AddToCartBtn>
      </DetailsWrapper>
    </ProductWrapper>
  );
};

export default Product;
