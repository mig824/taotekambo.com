/**@jsx jsx */
import React from 'react';
import { jsx, css } from '@emotion/react';

import Layout from '../components/Layout';
import SEO from '../components/SEO';
import Banner from '../components/images/Banner';
import Carousel from '../components/Carousel';

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Banner />
    <section>
      <h2>The Story of Kambo</h2>
      <p>
        The legend of the Kaxinawá says that deep in the jungle a tribe fell
        ill. The local medicine man named Kampu tried to heal the village with
        well know plant medicines, though he didn't have any breakthroughs.
        Kampu went into the jungle to sit in isolation drinking Ayahuasca. This
        master teacher plant showed him about Kambo medicine, it’s healing
        properties and how to use it. Kampu then set out into the jungle to find
        the correct frog, extract then medicine and return to his village. Upon
        returning he helped heal his entire village with this intelligent sacred
        medicine. The name Kambo was given to the medicine named after this
        Shaman that was able to listen to the plants and heal others with the
        wisdom he received.
      </p>
    </section>
    <section>
      <h2>Benefits from Kambo</h2>
      <p>
        Kambo enters through the lymphatic system and awakens the body's self
        healing abilities. It has been know to help with Anxiety, Depression,
        lack of motivation and clarity, Addiction, Candida, Staph Infection,
        High Blood Pressure, Parkinson's, Auto-immune Disorders, HIV & AID's,
        Cancer, Fertility and so much more.
      </p>
    </section>
    <Carousel />
  </Layout>
);

// const homePageCSS = css`
//   section {
//     display: flex;
//     max-height: 3.3rem;
//     padding-top: 1rem;
//     width: 100%;
//     margin-bottom: 1rem;
//   }
// `;

export default IndexPage;
