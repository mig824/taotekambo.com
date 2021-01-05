import React from 'react';
import { graphql } from 'gatsby';
import styled from '@emotion/styled';

import SEO from '../components/SEO';
import Ceremony from '../components/Ceremony';
import {
  mobileLandscape480,
  tabletLandscape992,
  tabletPortrait768,
} from '../utils/style/breakpoints';

const Header = styled.div`
  margin: 5em 0 3em 0;

  h2 {
    margin-top: 8em;

    ${tabletPortrait768} {
      margin-top: 10em;
    }
  }
`;

const CeremoniesContainer = styled.div<{ ceremonyCount: number }>`
  display: grid;
  grid-template-columns: 1fr;
  gap: 2em;
  width: 80vw;
  max-width: 60em;
  margin-bottom: 4em;

  ${mobileLandscape480} {
    width: 70vw;
  }

  ${tabletPortrait768} {
    width: 60vw;
  }

  ${tabletLandscape992} {
    grid-template-columns: ${({ ceremonyCount }) =>
      ceremonyCount < 4 ? `repeat(${ceremonyCount}, 1fr)` : `repeat(3, 1fr)`};
    width: ${({ ceremonyCount }) => (ceremonyCount > 1 ? `90vw` : `60vw`)};
    gap: 1.5em;
  }
`;

const CeremoniesPage = ({ data: { ceremonies } }) => {
  const ceremonyCount = ceremonies.edges.length;
  return (
    <>
      <SEO title="Ceremonies" />
      <Header>
        {ceremonyCount ? (
          <h1>
            {ceremonyCount > 1
              ? `${ceremonyCount} Upcoming Ceremonies`
              : `1 Upcoming Ceremony`}
          </h1>
        ) : (
          <h2>New Ceremonies will be up soon...</h2>
        )}
      </Header>
      <CeremoniesContainer ceremonyCount={ceremonyCount}>
        {ceremonies.edges.map(({ node }) => (
          <Ceremony ceremonyData={node} key={node.id} />
        ))}
      </CeremoniesContainer>
    </>
  );
};

export const PageQuery = graphql`
  query CeremoniesPageQuery($date: Date) {
    ceremonies: allStrapiEvents(
      filter: { date: { gte: $date } }
      sort: { fields: date, order: ASC }
    ) {
      edges {
        node {
          id
          title
          street
          city
          state
          zipCode
          date(formatString: "MMMM DD, YYYY")
          startTime
          endTime
          description
          fullPrice
          privatePrice
          eventImage {
            sharp: childImageSharp {
              fluid {
                ...GatsbyImageSharpFluid_withWebp
              }
            }
          }
        }
      }
    }
  }
`;

export default CeremoniesPage;
