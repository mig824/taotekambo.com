import React from 'react';
import styled from '@emotion/styled';

import SEO from '../components/SEO';
import { tabletPortrait768 } from '../utils/style/breakpoints';
import { secondaryColor } from '../utils/style/colorscheme';
import { rhythm } from '../utils/style/typography';

const Header = styled.div`
  margin-top: 5em;

  a {
    color: ${secondaryColor};
    font-size: ${rhythm(0.7)};
    transition: font-size 0.3s ease-in-out;

    &:hover {
      font-size: ${rhythm(0.76)};
    }
  }
`;

const ContentContainer = styled.div`
  margin-bottom: 2rem;
  display: grid;
  grid-template-columns: 1fr 1fr;
  width: fit-content;
  align-items: center;
  justify-content: center;
  gap: 1rem;

  ${tabletPortrait768} {
    grid-template-columns: 1fr 1fr 1fr;
  }
`;

const SocialPage = () => {
  return (
    <>
      <SEO title="Social" />
      <Header>
        <h1>
          <a
            href="https://www.instagram.com/taotekambo/?hl=en"
            target="_blank"
            rel="noopener noreferrer"
          >
            @taotekambo
          </a>
        </h1>
      </Header>
      <ContentContainer></ContentContainer>
    </>
  );
};

export default SocialPage;
