import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';

const Logo = () => {
  const data = useStaticQuery(graphql`
    query strapiLogoQuery {
      allStrapiImages(filter: { name: { eq: "logo" } }) {
        nodes {
          id
          name
          singleImages {
            childImageSharp {
              fixed(width: 55, height: 55, fit: CONTAIN) {
                ...GatsbyImageSharpFixed
              }
            }
          }
        }
      }
    }
  `);

  // if (!data?.placeholderImage?.childImageSharp?.fluid) {
  //   return <div>Picture not found</div>;
  // }

  return (
    <Img
      fixed={data.allStrapiImages.nodes[0].singleImages.childImageSharp.fixed}
    />
  );
};

export default Logo;
