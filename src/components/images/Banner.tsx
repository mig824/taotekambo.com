import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';

const Banner = () => {
  const data = useStaticQuery(graphql`
    query BannerImgQuery {
      images: allStrapiImages(filter: { name: { eq: "amazon-banner-image" } }) {
        nodes {
          id
          name
          singleImages {
            childImageSharp {
              fluid(quality: 75) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }
  `);

  return (
    <div
      style={{
        marginTop: '.4rem',
        maxHeight: '400px',
        width: '100%',
        overflow: 'hidden',
      }}
    >
      <Img fluid={data.images.nodes[0].singleImages.childImageSharp.fluid} />
    </div>
  );
};

export default Banner;
