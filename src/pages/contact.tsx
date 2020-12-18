import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';

import Layout from '../components/Layout';
import SEO from '../components/SEO';
import Map from '../components/Map';
import { PrimaryBtn } from '../components/styled/Button';
import {
  SectionContainer,
  SectionContentWrapper,
} from '../components/styled/Section';

const ContactPage = () => {
  const {
    info: { address, email, phoneNumber },
  } = useStaticQuery(graphql`
    query GetCompanyInfo {
      info: strapiCompanyInfo {
        address
        phoneNumber
        email
      }
    }
  `);

  return (
    <Layout>
      <SEO title="Contact" />
      <SectionContainer marginTop>
        <SectionContentWrapper>
          <div>
            <h1>Contact</h1>
            <h3>Phone</h3>
            <p>+1 {phoneNumber}</p>
            <h3>Email</h3>
            <p>{email}</p>
            <h3>Homebase</h3>
            <p>{address}</p>
            <PrimaryBtn margin="2rem 0 0 0" variant="primary">
              Schedule a Call
            </PrimaryBtn>
          </div>
          <Map
            centerPosition={[33.78646, -118.31684]}
            zoom={13}
            scrollWheelZoom={true}
            markerPosition={[33.78646, -118.31684]}
            address={address}
          />
        </SectionContentWrapper>
      </SectionContainer>
    </Layout>
  );
};

export default ContactPage;
