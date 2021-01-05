import React from 'react';
import Img from 'gatsby-image';
import styled from '@emotion/styled';
import {
  darkAccentColor,
  primaryColor,
  secondaryColor,
  secondaryColorHover,
} from '../utils/style/colorscheme';
import { PrimaryBtn } from './styled/Button';
import {
  mobileLandscape480,
  tabletLandscape992,
} from '../utils/style/breakpoints';

const EventWrapper = styled.div`
  padding: 2rem;
  text-align: center;
  background-color: ${primaryColor};
  border-radius: 15px;
  border: 1px solid ${secondaryColor};
  box-shadow: 0 0 18px 5px #222;

  p {
    margin: 1rem 0 -0.5em 0;
  }

  a {
    color: ${secondaryColor};

    &:hover {
      color: ${secondaryColorHover};
    }
  }

  ${tabletLandscape992} {
    display: flex;
    flex-direction: column;
    height: 100%;
  }
`;

const ImageWrapper = styled.div`
  max-width: 75%;
  height: 12em;
  width: 12em;
  margin: auto;

  ${mobileLandscape480} {
    max-width: 12em;
  }
`;

const DateWrapper = styled.div`
  margin: auto;
  max-height: fit-content;
  max-width: 34em;
  display: flex;
  justify-content: center;
  background-color: ${darkAccentColor};
  border-radius: 5px;

  h3 {
    margin: 1rem 0;
    color: ${secondaryColor};
  }

  ${tabletLandscape992} {
    width: 100%;
  }
`;

const DescriptionWrapper = styled.div`
  width: 80%;
  max-width: 30em;
  margin: 1em auto;
  border-top: 2px solid ${secondaryColor};
  border-bottom: 2px solid ${secondaryColor};

  p {
    margin: auto;
    padding: 1em 0;
  }
`;

const PriceWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: auto;

  ${mobileLandscape480} {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    max-width: 25em;
  }

  ${tabletLandscape992} {
    width: 100%;
  }
`;

const Ceremony = ({
  ceremonyData: {
    title,
    street,
    city,
    state,
    zipCode,
    date,
    description,
    eventImage,
    startTime,
    endTime,
    fullPrice,
    privatePrice,
  },
}) => {
  const address = `${street}, ${city}, ${state} ${zipCode}`;

  return (
    <EventWrapper>
      <ImageWrapper>
        <Img fluid={eventImage.sharp.fluid} />
      </ImageWrapper>
      <h2>{title}</h2>
      <DateWrapper>
        <h3>{date}</h3>
      </DateWrapper>
      <p>{address}</p>
      <a href={`http://maps.google.com/?q=${address}`}>Get Directions</a>
      <p>
        {startTime} - {endTime}
      </p>
      <DescriptionWrapper>
        <p>{description}</p>
      </DescriptionWrapper>

      <PriceWrapper>
        <p>
          <strong>1 Session:</strong> ${fullPrice}
        </p>
        <p>
          <strong>3 Sessions:</strong> ${fullPrice * 3 - 60}
        </p>
        {privatePrice && (
          <p>
            <strong>Private:</strong> ${privatePrice}
          </p>
        )}
      </PriceWrapper>
      <PrimaryBtn
        margin="2rem 0 0 0"
        variant="secondary"
        onClick={() =>
          window.open(`https://www.paypal.com/paypalme/taotekambo`)
        }
      >
        Secure My Spot
      </PrimaryBtn>
    </EventWrapper>
  );
};

export default Ceremony;
