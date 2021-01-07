import React from 'react';
import { graphql } from 'gatsby';
import styled from '@emotion/styled';

import SEO from '../components/SEO';
import Map from '../components/Map';
import { PrimaryBtn } from '../components/styled/Button';
import { SectionContainer } from '../components/styled/Section';
import { mobileLandscape480 } from '../utils/style/breakpoints';

const ContactContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 70em;
  width: 100%;
  margin: auto;
`;

const MapWrapper = styled.div`
  margin-top: 2em;
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

const ContactPage = ({ data: { site } }) => {
  const { homebase, email, phone } = site.siteMetadata.companyInfo;

  return (
    <>
      <SEO
        title="Contact"
        description="Who is Tao Te Kambo and how to get in contact"
      />
      <SectionContainer marginTop="5.2em">
        <ContactContentWrapper>
          <div id="text-wrapper">
            <h1>Contact</h1>
            <h3>Phone</h3>
            <p>{phone}</p>
            <h3>Email</h3>
            <p>{email}</p>
            <h3>Homebase</h3>
            <p>{homebase}</p>
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
                address={homebase}
              />
            </MapWrapper>
          ) : null}
        </ContactContentWrapper>
      </SectionContainer>
    </>
  );
};

export const ContactPageQuery = graphql`
  query {
    site {
      siteMetadata {
        companyInfo {
          homebase
          email
          phone
        }
      }
    }
  }
`;

export default ContactPage;
