import React, { useEffect } from 'react';
import { graphql, Link } from 'gatsby';
import { AnchorLink } from 'gatsby-plugin-anchor-links';
import styled from '@emotion/styled';
import AOS from 'aos';

import SEO from '../components/SEO';
import Banner from '../components/Banner';
import Testimonials from '../components/Testimonials';
import ScrollTopArrow from '../components/ScrollTopArrow';
import { mainTextColor } from '../utils/style/colorscheme';
import { PrimaryBtn } from '../components/styled/Button';
import {
  SectionContainer,
  SectionContentWrapper,
  SectionHeader,
} from '../components/styled/Section';

const H2Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const UL = styled.ul`
  text-align: left;
  color: ${mainTextColor};
  padding-left: 25%;
`;

const HomePage = ({ data: { pageContent, testimonials, site } }) => {
  useEffect(() => {
    AOS.init({
      duration: 1500,
      anchorPlacement: 'top-bottom',
    });
  }, []);

  return (
    <>
      <SEO title="Home" />
      <Banner
        bannerImg={pageContent.bannerImg.sharp.fluid}
        siteTitle={site.siteMetadata.title}
      />
      <SectionContainer>
        <SectionContentWrapper>
          <H2Wrapper data-aos="fade-right">
            <h2>The Story of Kambo</h2>
          </H2Wrapper>
          <div
            data-aos="fade-left"
            data-aos-delay={700}
            data-aos-duration={1500}
          >
            <p>
              The legend of the Kaxinawá says that deep in the jungle a tribe
              fell ill. The local medicine man named Kampu tried to heal the
              village with well know plant medicines, though he didn't have any
              breakthroughs. Kampu went into the jungle to sit in isolation
              drinking Ayahuasca. This master teacher plant showed him about
              Kambo medicine, it’s healing properties, and how to use it.
            </p>
            <br />
            <p>
              {' '}
              Kampu then set out into the jungle to find the correct frog,
              extract then medicine and return to his village. Upon returning he
              helped heal his entire village with this intelligent sacred
              medicine. The name Kambo was given to the medicine named after
              this Shaman that was able to listen to the plants and heal others
              with the wisdom he received.
            </p>
            <Link to="/learn">
              <PrimaryBtn margin="2rem 0 0 0" variant="primary">
                Learn More About Kambo
              </PrimaryBtn>
            </Link>
          </div>
        </SectionContentWrapper>
      </SectionContainer>
      <SectionContainer>
        <SectionContentWrapper>
          <div data-aos="fade-right">
            <p>
              Kambo enters through the lymphatic system and awakens the body's
              self-healing abilities. It has been known to help with Anxiety,
              Depression, lack of motivation and clarity, Addiction, Candida,
              Staph Infection, High Blood Pressure, Parkinson's, Auto-immune
              Disorders, HIV & AID's, Cancer, Fertility and so much more.
            </p>
            <AnchorLink
              to="/learn#the-science"
              title="Button to the science section"
              stripHash
            >
              <PrimaryBtn margin="2rem 0 0 0" variant="primary">
                The Science
              </PrimaryBtn>
            </AnchorLink>
          </div>
          <H2Wrapper className="change-order" data-aos="fade-left">
            <h2>Benefits from Kambo</h2>
          </H2Wrapper>
        </SectionContentWrapper>
      </SectionContainer>

      <SectionContainer>
        <SectionContentWrapper>
          <H2Wrapper data-aos="fade-right">
            <h2>Kambo can help if...</h2>
          </H2Wrapper>
          <div data-aos="fade-left">
            <UL>
              <li>You are feeling a lack of clarity</li>
              <li>You are struggling with food or drug addiction</li>
              <li>You are experiencing depression, anxiety, or stress</li>
            </UL>
          </div>
        </SectionContentWrapper>
      </SectionContainer>
      <SectionHeader>
        <h2 data-aos="zoom-in-up">Testimonials</h2>
      </SectionHeader>
      <Testimonials testimonialData={testimonials.edges} />
      <ScrollTopArrow />
    </>
  );
};

export const query = graphql`
  query HomePageQuery {
    site {
      siteMetadata {
        title
      }
    }
    pageContent: strapiLandingPage {
      bannerImg {
        sharp: childImageSharp {
          fluid(quality: 75, maxHeight: 1440, maxWidth: 2560) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
    testimonials: allStrapiTestimonials(
      sort: { order: DESC, fields: personDescription }
    ) {
      edges {
        node {
          id
          content
          personDescription
          image {
            childImageSharp {
              fluid(maxWidth: 90, maxHeight: 90) {
                ...GatsbyImageSharpFluid_withWebp
              }
            }
          }
        }
      }
    }
  }
`;

export default HomePage;
