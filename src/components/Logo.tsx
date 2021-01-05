import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';

const Logo = () => {
  const { companyInfo } = useStaticQuery(graphql`
    query strapiLogoQuery {
      companyInfo: strapiCompanyInfo {
        logo {
          sharp: childImageSharp {
            fluid(maxWidth: 45, maxHeight: 45, fit: CONTAIN) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
    }
  `);

  return <Img fluid={companyInfo.logo.sharp.fluid} />;
};

export default Logo;
