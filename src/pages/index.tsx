import React, { useEffect } from 'react';
import { useStaticQuery, graphql, Link } from 'gatsby';
import Img from 'gatsby-image';
import AOS from 'aos';

import Layout from '../components/Layout';
import SEO from '../components/SEO';
import Banner from '../components/Banner';
import Testimonials from '../components/Testimonials';
import { mainTextColor } from '../utils/global/colorscheme';
import { PrimaryBtn } from '../components/styled/Button';
import {
  SectionContainer,
  SectionContentWrapper,
  SectionHeader,
} from '../components/styled/Section';

const IndexPage = () => {
  const { pageContent, testimonials, site } = useStaticQuery(graphql`
    query GetLandingPageData {
      site {
        siteMetadata {
          title
        }
      }
      pageContent: strapiLandingPage {
        bannerText
        kamboStory
        kamboStoryContent
        kamboBenefits
        kamboBenefitsContent
        myStory
        myStoryContent
        myStoryImage {
          childImageSharp {
            fixed {
              ...GatsbyImageSharpFixed
            }
          }
        }
      }
      testimonials: allStrapiTestimonials {
        edges {
          node {
            id
            content
            personDescription
            image {
              childImageSharp {
                fixed(width: 80, height: 80) {
                  ...GatsbyImageSharpFixed
                }
              }
            }
          }
        }
      }
    }
  `);

  useEffect(() => {
    AOS.init({
      mirror: true,
      duration: 1500,
      anchorPlacement: 'center-bottom',
    });
  }, []);

  return (
    <Layout>
      <SEO title="Home" />
      <Banner
        bannerText={pageContent.bannerText}
        siteTitle={site.siteMetadata.title}
      />
      <SectionContainer>
        <SectionContentWrapper>
          <h2
            data-aos="fade-right"
            data-aos-delay={700}
            data-aos-duration={1500}
          >
            {pageContent.kamboStory}
          </h2>
          <div
            data-aos="fade-left"
            data-aos-delay={700}
            data-aos-duration={1500}
          >
            <p>{pageContent.kamboStoryContent}</p>
            <Link to="/learn">
              <PrimaryBtn margin="2rem 0 0 0" variant="primary">
                Learn More
              </PrimaryBtn>
            </Link>
          </div>
        </SectionContentWrapper>
      </SectionContainer>
      <SectionContainer>
        <SectionContentWrapper>
          <div data-aos="fade-right">
            <p>{pageContent.kamboBenefitsContent}</p>
            <Link to="/learn/#the-science">
              <PrimaryBtn margin="2rem 0 0 0" variant="primary">
                The Science
              </PrimaryBtn>
            </Link>
          </div>
          <h2 data-aos="fade-left">{pageContent.kamboBenefits}</h2>
        </SectionContentWrapper>
      </SectionContainer>

      <SectionContainer>
        <SectionContentWrapper>
          <h2 data-aos="fade-right">Kambo can help if...</h2>
          <div data-aos="fade-left">
            <ul style={{ textAlign: 'left', color: mainTextColor }}>
              <li>You are feeling a lack of clarity</li>
              <li>You are struggling with food or drug addiction</li>
              <li>You are experiencing depression, anxiety, or stress</li>
            </ul>
          </div>
        </SectionContentWrapper>
      </SectionContainer>
      <SectionContainer>
        <SectionContentWrapper>
          <div data-aos="fade-right">
            <Img fixed={pageContent.myStoryImage.childImageSharp.fixed} />
          </div>
          <div data-aos="fade-left">
            <h2>{pageContent.myStory}</h2>
            <br />
            <p>{pageContent.myStoryContent}</p>
          </div>
        </SectionContentWrapper>
      </SectionContainer>
      <SectionHeader>
        <h2 data-aos="zoom-in-up">Testimonials</h2>
      </SectionHeader>
      <Testimonials testimonialData={testimonials.edges} />
    </Layout>
  );
};

export default IndexPage;
