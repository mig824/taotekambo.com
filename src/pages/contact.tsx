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
import { rhythm } from '../utils/style/typography';

const ContactContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 70rem;
  width: 100%;
  margin: 2rem auto 0 auto;

  h1 {
    font-size: ${rhythm(1.1)};
    margin-bottom: 3rem;
  }

  .side-by-side {
    margin: 1rem auto;
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;

    h2 {
      margin: 0;
      padding-right: 0.5rem;
    }

    p {
      margin: 0;
      padding-left: 0.5rem;
    }

    ${mobileLandscape480} {
      width: 60%;
    }

    ${tabletPortrait768} {
      h1 {
        margin: 0 auto;
      }
    }
  }

  #text-wrapper {
    margin-bottom: 2rem;
  }
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
      <SectionContainer>
        <ContactContentWrapper>
          <div id="text-wrapper">
            <h1>Contact</h1>
            <div className="side-by-side">
              <h2>Phone: </h2>
              <p>{phone}</p>
            </div>
            <div className="side-by-side">
              <h2>Email: </h2>
              <p>{email}</p>
            </div>
            <div className="side-by-side">
              <h2>Homebase: </h2>
              <p>{homebase}</p>
            </div>
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
