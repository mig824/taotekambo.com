import React from 'react';
import Img from 'gatsby-image';
import styled from '@emotion/styled';
import {
  darkAccentColor,
  primaryColor,
  secondaryColor,
  secondaryColorHover,
} from '../utils/global/colorscheme';
import { PrimaryBtn } from './styled/Button';

const EventWrapper = styled.div`
  width: 60%;
  max-width: 1000px;
  margin: auto;
  padding: 2rem;
  text-align: center;
  background-color: ${primaryColor};
  border-radius: 15px;
  border: 1px solid ${secondaryColor};

  p {
    margin: 1rem 0 0 0;
  }

  a {
    color: ${secondaryColor};

    &:hover {
      color: ${secondaryColorHover};
    }
  }

  .btn-div {
    display: flex;
    justify-content: space-around;
  }
`;

const DateDiv = styled.div`
  max-height: fit-content;
  width: 100%;
  display: flex;
  justify-content: center;
  background-color: ${darkAccentColor};
  border-radius: 5px;

  h3 {
    margin: 1rem 0;
    color: ${secondaryColor};
  }
`;

const Ceremony = ({
  ceremonyData: {
    title,
    address,
    date,
    description,
    eventImage,
    startTime,
    endTime,
    depositPrice,
    fullPrice,
    privatePrice,
  },
}) => (
  <EventWrapper>
    <Img fixed={eventImage.sharp.fixed} />
    <h2>{title}</h2>
    <DateDiv>
      <h3>{date}</h3>
    </DateDiv>
    <p>{address}</p>
    <a href={`http://maps.google.com/?q=${address}`}>Get Directions</a>
    <p>
      {startTime} - {endTime}
    </p>
    <p>{description}</p>
    <div className="btn-div">
      <p>Deposit -- ${depositPrice}</p>
      <p>Session -- ${fullPrice}</p>
      <p>Private -- ${privatePrice}</p>
    </div>
    <PrimaryBtn margin="2rem 0 0 0" variant="secondary">
      RSVP
    </PrimaryBtn>
  </EventWrapper>
);

export default Ceremony;
