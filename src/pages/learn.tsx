import React, { useEffect, useRef } from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import Img from 'gatsby-image';
import Layout from '../components/Layout';
import SEO from '../components/SEO';
import Accordion from '../components/Accordion';
import {
  SectionContainer,
  SectionContentWrapper,
  SectionHeader,
} from '../components/styled/Section';
import styled from '@emotion/styled';
import { mainTextColor } from '../utils/global/colorscheme';
import Rellax from 'rellax';

const ImgWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ListWrapper = styled.div`
  ul {
    list-style: none;
  }

  a {
    color: ${mainTextColor};

    &:hover {
      cursor: pointer;
      text-decoration: underline;
    }
  }
`;

const LearnPage = () => {
  const rellaxRef = useRef(null);
  const { pageContent } = useStaticQuery(graphql`
    query GetLearnPageData {
      pageContent: strapiLearnPage {
        kamboInfo
        kamboInfoImage {
          sharp: childImageSharp {
            fixed {
              ...GatsbyImageSharpFixed
            }
          }
        }
      }
    }
  `);

  useEffect(() => {
    new Rellax(rellaxRef.current, {
      speed: -10,
    });
  }, []);

  return (
    <Layout>
      <SEO title="Learn" />
      <SectionHeader>
        <h2>Kambo</h2>
      </SectionHeader>
      <SectionContainer>
        <SectionContentWrapper>
          <ImgWrapper>
            <Img fixed={pageContent.kamboInfoImage.sharp.fixed} />
          </ImgWrapper>
          <div>
            <p>{pageContent.kamboInfo}</p>
          </div>
        </SectionContentWrapper>
      </SectionContainer>
      <SectionHeader>
        <a id="the-science">
          <h2>The Science</h2>
        </a>
      </SectionHeader>
      <SectionContainer>
        <SectionContentWrapper noCols>
          <Accordion title="Phyllomedusin">
            <p>
              A neuropeptide which strongly affects intestines, salivary glands
              and bowels helping to flush deep toxins.{' '}
            </p>
          </Accordion>
          <Accordion title="Phyllokinin">
            <p>
              Produces a long-lasting reduction in blood pressure. It helps
              widen the blood vessels, increasing permeability of the
              blood-brain barrier. (Increases the rate and flow of a layer of
              specialized cells around the brain that protects it)
            </p>
          </Accordion>
          <Accordion title="Phyllocaerulein">
            <p>
              A natural pain killer that reduces blood pressure, modifies
              fulfilment, helps with sedation and thermoregulation (regulation
              of body temperature). Stimulates the pituitary gland and the
              adrenal cortex conducive of heightened sensory perception and
              increased stamina.
            </p>
          </Accordion>
          <Accordion title="Phyllolitorin">
            <p>
              A neuropeptide that stimulates gastric acid secretion and smooth
              muscle contraction.
            </p>
          </Accordion>
          <Accordion title="Dermorphin">
            <p>
              A neuropeptide that produces a powerful opiate-like effects on
              certain Opioid receptors. It has been know to be up to 40 x more
              potent than morphine.
            </p>
          </Accordion>
          <Accordion title="Tryptophyllins">
            <p>
              A neuropeptide that has anti-microbial properties which have been
              found to inhibit the growth of yeast Candida Albicans,
              Staphylococcus aureus and E. coli.
            </p>
          </Accordion>
          <Accordion title="Deltorphin">
            <p>
              A heptapeptide that binds to the opioid receptors. Currently being
              researched for its ability to inhibit the growth of cancerous
              tumor cells.
            </p>
          </Accordion>
          <Accordion title="Dermaseptin & Adenoreguli (B2)">
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
      <SectionContainer>
        <SectionContentWrapper>
          <div>
            <h3>Additional Resources</h3>
          </div>
          <ListWrapper>
            <ul>
              <li>
                <a
                  href="https://psychedelictimes.com/a-guide-to-increasing-fertility-and-taking-kambo-during-pregnancy/"
                  target="_blank"
                >
                  Kambo & Fertility
                </a>
              </li>
              <li>
                <a
                  href="https://www.vice.com/en_us/article/gqkxa9/kambo-ceremony-alcoholism-purging-uk"
                  target="_blank"
                >
                  Kambo & Addiction
                </a>
              </li>
              <li>
                <a href="https://psychedelictimes.com/kambo/" target="_blank">
                  Kambo Benefits
                </a>
              </li>
              <li>
                <a
                  href="https://www.sciencedaily.com/releases/2011/06/110606181137.htm"
                  target="_blank"
                >
                  Fighting Cancer with Kambo
                </a>
              </li>
            </ul>
          </ListWrapper>
        </SectionContentWrapper>
      </SectionContainer>
      <SectionHeader>
        <h2>How To Prepare</h2>
      </SectionHeader>
      <SectionContainer>
        <SectionContentWrapper>
          <p>some image</p>
          <p>some content</p>
        </SectionContentWrapper>
      </SectionContainer>
      <SectionHeader>
        <h2>FAQ's</h2>
      </SectionHeader>
      <SectionContainer>
        <SectionContentWrapper noCols>
          <Accordion title="Does it hurt?">
            <p className="accordion-text">
              No, the burns can be shocking at first but I've seen children
              handle it very well. The process can be uncomfortable depending on
              what toxins are being released. It's better out than in.
            </p>
          </Accordion>
          <Accordion title="Is the process long?">
            <p className="accordion-text">
              The journey with Kambo is about 20 minutes or so.
            </p>
          </Accordion>
          <Accordion title="Do the burns scar?">
            <p className="accordion-text">
              The burns usually heal in 6 months to a year depending on how well
              you heal and your skin complexion. Most people wear the scars as
              badges of honor.
            </p>
          </Accordion>
          <Accordion title="Will I be able to drive home after?">
            <p className="accordion-text">
              Yes, after adequate rest time you can drive home. It's recommended
              to have some time for rest and integration after though many of my
              clients go to work the next morning.
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
        </SectionContentWrapper>
      </SectionContainer>
    </Layout>
  );
};

export default LearnPage;
