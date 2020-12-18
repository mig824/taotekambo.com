import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';

import Layout from '../components/Layout';
import SEO from '../components/SEO';
import Ceremony from '../components/Ceremony';

const CeremoniesPage = () => {
  const { ceremonies } = useStaticQuery(graphql`
    query CeremoniesQuery {
      ceremonies: allStrapiEvents {
        edges {
          node {
            id
            title
            address
            date(formatString: "MMMM DD, YYYY")
            startTime
            endTime
            description
            depositPrice
            fullPrice
            privatePrice
            eventImage {
              sharp: childImageSharp {
                fixed(width: 200, height: 200) {
                  ...GatsbyImageSharpFixed
                }
              }
            }
          }
        }
      }
    }
  `);

  return (
    <Layout>
      <SEO title="Ceremonies" />
      <div>
        <h1>Upcoming Ceremonies</h1>
      </div>
      {ceremonies.edges.map(({ node }) => (
        <Ceremony ceremonyData={node} />
      ))}
    </Layout>
  );
};

export default CeremoniesPage;
