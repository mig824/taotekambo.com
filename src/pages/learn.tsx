import React, { useEffect } from 'react';
import { graphql } from 'gatsby';
import BackgroundImage from 'gatsby-background-image';
import styled from '@emotion/styled';
import AOS from 'aos';

import SEO from '../components/SEO';
import Accordion from '../components/Accordion';
import ScrollTopArrow from '../components/ScrollTopArrow';
import {
  SectionContainer,
  SectionContentWrapper,
  SectionHeader,
} from '../components/styled/Section';
import {
  backgroundColor,
  darkAccentColor,
  mainTextColor,
  primaryColor,
} from '../utils/style/colorscheme';
import {
  desktop1200,
  mobileLandscape480,
  tabletLandscape992,
} from '../utils/style/breakpoints';

const Img = styled(BackgroundImage)`
  overflow: hidden;
  margin: 0 1rem 1rem 0;
  height: 10rem;
  width: 10rem;
  float: left;
  border-radius: 50%;
  shape-outside: circle();

  ${mobileLandscape480} {
    width: 15rem;
    height: 15rem;
  }
`;

const ListWrapper = styled.div`
  ul {
    list-style: none;
    text-align: left;
    padding: 0 3em;
  }

  a {
    color: ${mainTextColor};

    &:hover {
      cursor: pointer;
      text-decoration: underline;
    }
  }

  li {
    color: ${mainTextColor};
  }

  hr {
    border: ${darkAccentColor} 1px solid;
    background-color: ${darkAccentColor};
  }

  ${tabletLandscape992} {
    ul {
      padding: 0 15%;
    }
  }
`;

const AboutWrapper = styled.div`
  margin: auto;
  max-width: 900px;

  p {
    text-align: left;
    margin-left: 1rem;
  }
`;

const H2Wrapper = styled.div`
  display: flex;
  justify-content: center;
`;

const AdditionalResourcesWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  background-color: ${darkAccentColor};

  h2 {
    margin-bottom: 1rem;
    order: -1;
  }

  p {
    margin: auto;
  }

  ${mobileLandscape480} {
    grid-template-columns: 1fr 1fr;

    h2 {
      margin: auto;
    }
  }

  ${desktop1200} {
    max-width: 70vw;
    margin: auto;
  }
`;

const LearnPage = ({ data: { image } }) => {
  useEffect(() => {
    AOS.init({
      mirror: false,
      duration: 1500,
      anchorPlacement: 'top-bottom',
    });
  }, []);

  return (
    <>
      <SEO
        title="Learn"
        description="Learn more about the origins of kambo, the science behind it, and how to prepare for a ceremony."
      />
      <SectionContainer marginTop="3em">
        <H2Wrapper id="kambo" data-aos="zoom-in-down">
          <h2>Kambo</h2>
        </H2Wrapper>
        <AboutWrapper data-aos="fade-left">
          <Img Tag="div" fluid={image.sharp.fluid} />
          <p>
            Kambo is a physical, emotional and spiritual cleanse. Kambo is a
            sacred medicine derived from the Giant Monkey Frog scientifically
            known as the Phyllomedusa bicolor. Many tribes in the greater amazon
            area have been working with this frog for centuries. Due to the
            frogs very distinct song they are easily found and captured to
            harvest their medicine. The frogs are stressed to secrete their
            medicine though they are unharmed during the process. The tribes
            believe that the frogs are protectors of the forest and great
            teachers so if the frogs are harmed in their care it would bring bad
            luck.
          </p>
          <p>
            {' '}
            The secretion and the frogs are often called Kambo, Acate, Sapo,
            Dow-kiet and Kampu. Kambo has a very complex peptide chain that
            contains 9 peptides that are known to work with the human body. It
            enters through the lymphatic system and begins to cleanse the body
            at a cellular level. Kambo has been found to be one of natures most
            powerful ways to boost the immune system and it is also a powerful
            antimicrobial, antibiotic and anti-inflammatory. The tribes use
            Kambo as a medicine to optimize their hunting abilities. They say it
            gives the hunters an increase in speed, strength, endurance and
            focus. They usually receive it from the best hunter in the village.
            They also use it as a medicine for malaria, snake bites, parasites,
            infections and other illnesses. One similarity between many tribes
            is the use of kambo to help clear the cloud of bad luck and
            negativity which can cause laziness and lack of motivation which the
            indigenous call “Panema”.
          </p>
        </AboutWrapper>
      </SectionContainer>
      <SectionHeader>
        <H2Wrapper id="the-science" data-aos="zoom-in-down">
          <h2>The Science</h2>
        </H2Wrapper>
      </SectionHeader>
      <SectionContainer bgColor={darkAccentColor}>
        <SectionContentWrapper noCols data-aos="fade-up">
          <Accordion title="Phyllomedusin" bgColor={darkAccentColor}>
            <p>
              A neuropeptide which strongly affects intestines, salivary glands
              and bowels helping to flush deep toxins.{' '}
            </p>
          </Accordion>
          <Accordion title="Phyllokinin" bgColor={darkAccentColor}>
            <p>
              Produces a long-lasting reduction in blood pressure. It helps
              widen the blood vessels, increasing permeability of the
              blood-brain barrier. (Increases the rate and flow of a layer of
              specialized cells around the brain that protects it)
            </p>
          </Accordion>
          <Accordion title="Phyllocaerulein" bgColor={darkAccentColor}>
            <p>
              A natural pain killer that reduces blood pressure, modifies
              fulfilment, helps with sedation and thermoregulation (regulation
              of body temperature). Stimulates the pituitary gland and the
              adrenal cortex conducive of heightened sensory perception and
              increased stamina.
            </p>
          </Accordion>
          <Accordion title="Phyllolitorin" bgColor={darkAccentColor}>
            <p>
              A neuropeptide that stimulates gastric acid secretion and smooth
              muscle contraction.
            </p>
          </Accordion>
          <Accordion title="Dermorphin" bgColor={darkAccentColor}>
            <p>
              A neuropeptide that produces a powerful opiate-like effects on
              certain Opioid receptors. It has been know to be up to 40 x more
              potent than morphine.
            </p>
          </Accordion>
          <Accordion title="Tryptophyllins" bgColor={darkAccentColor}>
            <p>
              A neuropeptide that has anti-microbial properties which have been
              found to inhibit the growth of yeast Candida Albicans,
              Staphylococcus aureus and E. coli.
            </p>
          </Accordion>
          <Accordion title="Deltorphin" bgColor={darkAccentColor}>
            <p>
              A heptapeptide that binds to the opioid receptors. Currently being
              researched for its ability to inhibit the growth of cancerous
              tumor cells.
            </p>
          </Accordion>
          <Accordion
            title="Dermaseptin & Adenoreguli (B2)"
            bgColor={darkAccentColor}
          >
            <p>
              Anti-microbial peptides that exhibit lethal effects against a
              broad spectrum of bacteria, fungi, yeasts and protozoa. There is
              growing research on the effectiveness of these peptides killing
              certain cancer cells. The effects that these peptides are having
              on the human brain are opening treatments for depression, stroke,
              Alzheimer's and Parkinson's disease.
            </p>
          </Accordion>
        </SectionContentWrapper>
      </SectionContainer>
      <SectionContainer bgColor={darkAccentColor}>
        <AdditionalResourcesWrapper>
          <div data-aos="fade-right">
            <h3>Additional Resources</h3>
          </div>
          <ListWrapper data-aos="fade-left">
            <ul>
              <li>
                <a
                  href="https://psychedelictimes.com/a-guide-to-increasing-fertility-and-taking-kambo-during-pregnancy/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Kambo & Fertility
                </a>
              </li>
              <li>
                <a
                  href="https://www.vice.com/en_us/article/gqkxa9/kambo-ceremony-alcoholism-purging-uk"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Kambo & Addiction
                </a>
              </li>
              <li>
                <a
                  href="https://psychedelictimes.com/kambo/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Kambo Benefits
                </a>
              </li>
              <li>
                <a
                  href="https://www.sciencedaily.com/releases/2011/06/110606181137.htm"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Fighting Cancer with Kambo
                </a>
              </li>
            </ul>
          </ListWrapper>
        </AdditionalResourcesWrapper>
      </SectionContainer>
      <SectionHeader bgColor={primaryColor}>
        <H2Wrapper id="how-to-prepare" data-aos="zoom-in-down">
          <h2>How To Prepare</h2>
        </H2Wrapper>
      </SectionHeader>
      <SectionContainer bgColor={primaryColor}>
        <SectionContentWrapper noCols>
          <ListWrapper data-aos="fade-right">
            <ul>
              <li>Fast 6+ hours prior </li>
              <li>Eat as clean as possible the days before</li>
              <li>No meat and animal products 24hrs prior if possible</li>
              <li>
                Take no drugs the day of ceremony ( Please notify us if you are
                on any medication ){' '}
              </li>
              <li> Stay slightly above hydrated the day of ceremony</li>
              <li>Journal your intentions in the days before ceremony </li>
            </ul>
            <hr />
            <h2>Bring...</h2>
            <br />
            <ul>
              <li>1 gallon of spring water</li>
              <li>Yoga mat </li>
              <li>Towel / Blanket</li>
              <li>Journal & Pen</li>
              <li>Open mind and heart </li>
            </ul>
          </ListWrapper>
        </SectionContentWrapper>
      </SectionContainer>
      <SectionHeader bgColor={backgroundColor}>
        <H2Wrapper id="faq" data-aos="zoom-in-down">
          <h2>FAQ's</h2>
        </H2Wrapper>
      </SectionHeader>
      <SectionContainer>
        <SectionContentWrapper noCols>
          <div data-aos="fade-left">
            <Accordion title="Does it hurt?">
              <p className="accordion-text">
                No, the burns can be shocking at first but I've seen children
                handle it very well. The process can be uncomfortable depending
                on what toxins are being released. It's better out than in.
              </p>
            </Accordion>
            <Accordion title="Is the process long?">
              <p className="accordion-text">
                The journey with Kambo is about 20 minutes or so.
              </p>
            </Accordion>
            <Accordion title="Do the burns scar?">
              <p className="accordion-text">
                The burns usually heal in 6 months to a year depending on how
                well you heal and your skin complexion. Most people wear the
                scars as badges of honor.
              </p>
            </Accordion>
            <Accordion title="Will I be able to drive home after?">
              <p className="accordion-text">
                Yes, after adequate rest time you can drive home. It's
                recommended to have some time for rest and integration after
                though many of my clients go to work the next morning.
              </p>
            </Accordion>
            <Accordion title="What do I do post-ceremony?">
              <p className="accordion-text">
                Eating healthy, easily digestible foods, spending time in nature
                and journaling are very beneficial post Kambo.
              </p>
            </Accordion>
            <Accordion title="Are the frogs harmed in the process?">
              <p className="accordion-text">
                No, I personally know the man I receive my medicine from. He and
                the others from the Matses tribe handle the frogs with extreme
                care and return the frogs back to the jungle safely after the
                medicine is extracted.
              </p>
            </Accordion>
          </div>
        </SectionContentWrapper>
      </SectionContainer>
      <ScrollTopArrow />
    </>
  );
};

export const learnPageQuery = graphql`
  query {
    image: file(
      name: { eq: "frog-on-a-tree" }
      sourceInstanceName: { eq: "images" }
    ) {
      sharp: childImageSharp {
        fluid(fit: COVER) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`;

export default LearnPage;
