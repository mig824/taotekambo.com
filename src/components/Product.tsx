import React, { useState } from 'react';
import Img from 'gatsby-image';
import styled from '@emotion/styled';
import { MdAddShoppingCart } from 'react-icons/md';

import { primaryColor, secondaryColor } from '../utils/style/colorscheme';
import { rhythm } from '../utils/style/typography';
import {
  mobileLandscape480,
  tabletPortrait768,
} from '../utils/style/breakpoints';

const ProductWrapper = styled.div`
  border: solid 1px ${secondaryColor};
  border-radius: 10px;
  margin-bottom: 1.5rem;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  box-shadow: 0 0 4px 3px #222;
  max-width: 500px;
  /* height: fit-content; */

  ${mobileLandscape480} {
    height: 100%;
    margin: 0;
  }
`;

const ImgWrapper = styled.div`
  max-width: 30em;
  width: 50%;
  margin: auto;

  ${mobileLandscape480} {
    width: 100%;
  }
`;

const DetailsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
  max-width: 1000px;
  text-align: center;

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
`;

const SmallText = styled.small<{ isAvailable: boolean }>`
  color: ${({ isAvailable }) => (isAvailable ? '#66cd00' : '#ee2c2c')};
  margin-bottom: ${rhythm(0.5)};
`;

const AddToCartBtn = styled.button`
  width: 100%;
  font-size: ${rhythm(1)};
  background-color: ${primaryColor};
  color: ${secondaryColor};
  border: none;
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
      <ImgWrapper>
        <Img fluid={images[0].localFile.sharp.fluid} />
      </ImgWrapper>
      <DetailsWrapper>
        <h3>{title}</h3>
        {variants.length > 1 && (
          <select
            defaultValue={variants[0].title}
            onChange={(e) => {
              const variant = variants.find((v) => v.title === e.target.value);
              setSelectedVariant(variant);
            }}
          >
            {variants.map(({ title, shopifyId, availableForSale }) => {
              return (
                <option
                  value={title}
                  disabled={!availableForSale}
                  key={shopifyId}
                >
                  {title}
                </option>
              );
            })}
          </select>
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
      </DetailsWrapper>
      <AddToCartBtn
        onClick={() => {
          if (selectedVariant.availableForSale) {
            addToCart(selectedVariant.shopifyId, 1);
          }
        }}
      >
        <MdAddShoppingCart />
      </AddToCartBtn>
    </ProductWrapper>
  );
};

export default Product;
