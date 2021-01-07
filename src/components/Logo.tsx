import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';

const Logo = () => {
  const { file } = useStaticQuery(graphql`
    query LogoQuery {
      file(name: { eq: "taotelogo" }, sourceInstanceName: { eq: "images" }) {
        sharp: childImageSharp {
          fluid(maxWidth: 45, maxHeight: 45, fit: CONTAIN) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `);

  return <Img fluid={file.sharp.fluid} />;
};

export default Logo;
