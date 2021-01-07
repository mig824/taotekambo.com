import React from 'react';
import { graphql } from 'gatsby';
import styled from '@emotion/styled';

import SEO from '../components/SEO';
import Ceremony from '../components/Ceremony';
import {
  mobileLandscape480,
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
  display: flex;
  flex-direction: column;
  width: 80vw;
  max-width: 60em;
  margin-bottom: 4em;
  justify-content: center;

  ${mobileLandscape480} {
    width: 70vw;
  }

  ${tabletPortrait768} {
    display: grid;
    grid-template-columns: ${({ ceremonyCount }) =>
      ceremonyCount % 2 === 0
        ? `repeat(${
            ceremonyCount > 8 ? 4 : ceremonyCount > 2 ? ceremonyCount / 2 : 2
          }, 1fr)`
        : `repeat(${ceremonyCount > 1 ? 3 : 1}, 1fr)`};
    width: ${({ ceremonyCount }) => (ceremonyCount > 1 ? `90vw` : `35rem`)};
    gap: 1.5em;
  }
`;

const CeremoniesPage = ({ data: { ceremonies } }) => {
  const ceremonyCount = ceremonies.nodes.length;
  return (
    <>
      <SEO
        title="Ceremonies"
        description="Check out our upcoming kambo ceremonies here."
      />
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
        {ceremonies.nodes.map((node) => (
          <Ceremony ceremonyData={node} key={node.id} />
        ))}
      </CeremoniesContainer>
    </>
  );
};

export const PageQuery = graphql`
  query CeremoniesPageQuery($date: Date) {
    ceremonies: allContentfulEvent(
      filter: { date: { gte: $date } }
      sort: { fields: date, order: ASC }
    ) {
      nodes {
        id
        name
        location
        date(formatString: "MMMM DD, YYYY")
        start
        end
        price
        privatePrice
        description {
          remark: childMarkdownRemark {
            html
          }
        }
        image {
          fluid(maxWidth: 500, maxHeight: 492) {
            ...GatsbyContentfulFluid_withWebp
          }
        }
      }
    }
  }
`;

export default CeremoniesPage;
