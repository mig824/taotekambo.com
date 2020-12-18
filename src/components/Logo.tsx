import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';

const Logo = () => {
  const data = useStaticQuery(graphql`
    query strapiLogoQuery {
      strapiImages(name: { eq: "logo" }) {
        singleImages {
          childImageSharp {
            fixed(width: 55, height: 55, fit: CONTAIN) {
              ...GatsbyImageSharpFixed
            }
          }
        }
      }
    }
  `);

  // if (!data?.placeholderImage?.childImageSharp?.fluid) {
  //   return <div>Picture not found</div>;
  // }

  return <Img fixed={data.strapiImages.singleImages.childImageSharp.fixed} />;
};

export default Logo;
