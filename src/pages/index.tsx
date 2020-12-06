/**@jsx jsx */
import React, { useEffect } from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';
import { jsx, css } from '@emotion/react';
import AOS from 'aos';

import Layout from '../components/Layout';
import SEO from '../components/SEO';
import Banner from '../components/images/Banner';
import Testimonials from '../components/Testimonials';
import {
  PrimaryBtn,
  SectionContainer,
  SectionContentWrapper,
} from '../utils/styles/styled-components';
import { mainTextColor } from '../utils/styles/colorscheme';

const IndexPage = () => {
  const { pageContent, testimonials } = useStaticQuery(graphql`
    query GetLandingPageData {
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
      <Banner bannerText={pageContent.bannerText} />
      <SectionContainer>
        <SectionContentWrapper>
          <h2
            data-aos="fade-right"
            data-aos-delay={1000}
            data-aos-duration={1500}
          >
            {pageContent.kamboStory}
          </h2>
          <div
            data-aos="fade-left"
            data-aos-delay={1000}
            data-aos-duration={1500}
          >
            <p>{pageContent.kamboStoryContent}</p>
            <PrimaryBtn marginTop>Learn More</PrimaryBtn>
          </div>
        </SectionContentWrapper>
      </SectionContainer>
      <SectionContainer>
        <SectionContentWrapper>
          <div data-aos="fade-right">
            <p>{pageContent.kamboBenefitsContent}</p>
            <PrimaryBtn marginTop>The Science</PrimaryBtn>
          </div>
          <h2 data-aos="fade-left">{pageContent.kamboBenefits}</h2>
        </SectionContentWrapper>
      </SectionContainer>
      <SectionContainer>
        <SectionContentWrapper>
          <div data-aos="fade-right">
            <Img fixed={pageContent.myStoryImage.childImageSharp.fixed} />
          </div>
          <div data-aos="fade-left">
            <h2>{pageContent.myStory}</h2>
            <p>{pageContent.myStoryContent}</p>
          </div>
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
      <h2 data-aos="zoom-in-up">Testimonials</h2>
      <Testimonials testimonialData={testimonials.edges} />
    </Layout>
  );
};

// const homePageCSS = css`
//   section {
//     display: flex;
//     max-height: 3.3rem;
//     padding-top: 1rem;
//     width: 100%;
//     margin-bottom: 1rem;
//     z-index: 4;
//   }
// `;

export default IndexPage;
