import React from 'react';

import Layout from '../components/Layout';
import SEO from '../components/SEO';
import Image from '../components/Image';
import { ImgContainer } from '../utils/styles/components';

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <ImgContainer>
      <img src="https://images.unsplash.com/photo-1588392382834-a891154bca4d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1355&q=80" />
    </ImgContainer>
    <section>
      <h1>The Story of Kambo</h1>
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
      <h1>Benefits from Kambo</h1>
      <p>
        Kambo enters through the lymphatic system and awakens the body's self
        healing abilities. It has been know to help with Anxiety, Depression,
        lack of motivation and clarity, Addiction, Candida, Staph Infection,
        High Blood Pressure, Parkinson's, Auto-immune Disorders, HIV & AID's,
        Cancer, Fertility and so much more.
      </p>
    </section>
  </Layout>
);

export default IndexPage;
