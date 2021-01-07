import React from 'react';
import Img from 'gatsby-image';
import styled from '@emotion/styled';
import {
  darkAccentColor,
  mainTextColor,
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
  background-color: ${primaryColor};
  border-radius: 15px;
  border: 1px solid ${secondaryColor};
  box-shadow: 0 0 18px 5px #222;
  overflow: hidden;

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

    button {
      max-width: fit-content;
      margin: 2em auto 0 auto;
    }
  }
`;

const ImageWrapper = styled.div`
  height: 14em;
  width: 100%;
  margin-top: -2em;
  overflow: hidden;
`;

const EventDetailsWrapper = styled.div`
  padding: 0 2em 2em 2em;
  text-align: center;
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
    eventName,
    address,
    eventDate,
    eventDescription,
    eventImage,
    startTime,
    endTime,
    fullPrice,
    privatePrice,
  },
}) => {
  return (
    <EventWrapper>
      <ImageWrapper>
        <Img fluid={eventImage.fluid} />
      </ImageWrapper>
      <EventDetailsWrapper>
        <h2>{eventName}</h2>
        <DateWrapper>
          <h3>{eventDate}</h3>
        </DateWrapper>
        <p>{address}</p>
        <a href={`http://maps.google.com/?q=${address}`}>Get Directions</a>
        <p>
          {startTime} - {endTime}
        </p>
        <DescriptionWrapper
          dangerouslySetInnerHTML={{ __html: eventDescription.remark.html }}
        />
        <PriceWrapper>
          <p>
            <strong>1 Session:</strong> ${fullPrice}
          </p>
          <p>
            <strong>3 Sessions:</strong> ${fullPrice * 3 - 60}
          </p>
          {privatePrice > 0 && (
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
      </EventDetailsWrapper>
    </EventWrapper>
  );
};

export default Ceremony;
