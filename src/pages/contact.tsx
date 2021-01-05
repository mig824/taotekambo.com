import React from 'react';
import { graphql } from 'gatsby';
import styled from '@emotion/styled';

import SEO from '../components/SEO';
import Map from '../components/Map';
import { PrimaryBtn } from '../components/styled/Button';
import { SectionContainer } from '../components/styled/Section';
import {
  mobileLandscape480,
  tabletPortrait768,
} from '../utils/style/breakpoints';

const ContactContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 70em;
  width: 100%;
  margin: auto;

  /* #text-wrapper {
    width: 100
  } */

  /* ${tabletPortrait768} {
    display: grid;
    grid-template-columns: 1fr 1fr;
  } */
`;

const MapWrapper = styled.div`
  margin: 2em auto 0 auto;
  max-width: 60em;
  width: 100%;
  height: 18em;
  border-radius: 10px;
  overflow: hidden;

  .leaflet-container {
    width: 100%;
    height: 100%;
  }

  ${mobileLandscape480} {
    height: 25em;
  }
`;

const ContactPage = ({
  data: {
    info: { address, email, phoneNumber },
  },
}) => {
  return (
    <>
      <SEO title="Contact" />
      <SectionContainer marginTop="5.2em">
        <ContactContentWrapper>
          <div id="text-wrapper">
            <h1>Contact</h1>
            <h3>Phone</h3>
            <p>+1 {phoneNumber}</p>
            <h3>Email</h3>
            <p>{email}</p>
            <h3>Homebase</h3>
            <p>{address}</p>
            <PrimaryBtn
              margin="2rem 0 0 0"
              variant="primary"
              onClick={() => window.open(`mailto:${email}`)}
            >
              Contact Us
            </PrimaryBtn>
          </div>
          {typeof window !== `undefined` ? (
            <MapWrapper>
              <Map
                centerPosition={[33.78646, -118.31684]}
                zoom={13}
                scrollWheelZoom={true}
                markerPosition={[33.78646, -118.31684]}
                address={address}
              />
            </MapWrapper>
          ) : null}
        </ContactContentWrapper>
      </SectionContainer>
    </>
  );
};

export const query = graphql`
  query CompanyPageQuery {
    info: strapiCompanyInfo {
      address
      phoneNumber
      email
    }
  }
`;

export default ContactPage;
