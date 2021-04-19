import React from 'react';
import styled from 'styled-components';
import { StaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';
import ExternalLink from '@common/ExternalLink';

import { Section, Container } from '@components/global';

const About = () => (
  <StaticQuery
    query={graphql`
      query {
        art_fast: file(
          sourceInstanceName: { eq: "art" }
          name: { eq: "Wind-Right" }
        ) {
          childImageSharp {
            fluid(maxWidth: 760) {
              ...GatsbyImageSharpFluid_withWebp_tracedSVG
            }
          }
        }

        art_learn: file(
          sourceInstanceName: { eq: "art" }
          name: { eq: "Wind-Left" }
        ) {
          childImageSharp {
            fluid(maxWidth: 760) {
              ...GatsbyImageSharpFluid_withWebp_tracedSVG
            }
          }
        }

        art_ideas: file(
          sourceInstanceName: { eq: "art" }
          name: { eq: "Rocket-Flames" }
        ) {
          childImageSharp {
            fluid(maxWidth: 760) {
              ...GatsbyImageSharpFluid_withWebp_tracedSVG
            }
          }
        }
      }
    `}
    render={data => (
      <Section id="blurb">
        <Container>
          <Grid>
            <div>
              <h2>Descendants of Power </h2>
              <p>
              is the story of two civilizations evolving in parallel over 100 years. 
              One runs from its mistakes, while the other is forced to meet them head on - until the two meet their inevitable collision.
              </p>
            </div>
            <Art>
              <Img fluid={data.art_fast.childImageSharp.fluid} />
            </Art>
          </Grid>
          <Grid inverse>
            <Art>
              <Img fluid={data.art_learn.childImageSharp.fluid} />
            </Art>
            <div>
              <p>
              Who would be better off, those with the power and resources to ‘start fresh’, 
              but with the same ideology that destroyed their home world, 
              or those who are left behind with little more than a crumbling planet and lessons learned? 
              </p>
            </div>
          </Grid>
          <Grid>
            <div>
              <p>
                  A multi-generational saga that is not driven by any one of its extensive cast of characters but instead a unifying ideology, 
                  Descendants of Power is the narrative of a people divided and reunited again, and at its core the question:
                  Can we overcome our own human nature, or are we destined to live as a warring and contentious species?
              </p>
              <br /> <br />
                <StyledExternalLink href="https://www.amazon.com/Descendants-Power-Dystopian-Climate-Apocalypse-ebook/dp/B08RCCN9J8/ref=sr_1_1?dchild=1&keywords=descendants+of+power&qid=1616977225&sr=8-1">
                  Buy now. &nbsp;&#x2794;
                </StyledExternalLink>
            </div>
            <Art>
              <Img fluid={data.art_ideas.childImageSharp.fluid} />
            </Art>
          </Grid>
        </Container>
      </Section>
    )}
  />
);

const Grid = styled.div`
  display: grid;
  grid-template-columns: 3fr 2fr;
  grid-gap: 40px;
  text-align: right;
  align-items: center;
  justify-items: center;
  margin: 24px 0;

  ${props =>
    props.inverse &&
    `
    text-align: left;
    grid-template-columns: 2fr 3fr;
  `}

  h2 {
    margin-bottom: 16px;
  }

  @media (max-width: ${props => props.theme.screen.md}) {
    grid-template-columns: 1fr;
    text-align: left;
    margin-bottom: 96px;

    &:last-child {
      margin-bottom: 24px;
    }

    ${props =>
      props.inverse &&
      `
        ${Art} {
          order: 2;
        }
    `}
  }
`;

const Art = styled.figure`
  margin: 0;
  max-width: 380px;
  width: 100%;
`;

const StyledExternalLink = styled(ExternalLink)`
  color: inherit;
  text-decoration: none;
  font-size 6vh;

  background-image: linear-gradient(#ffffff, #ffffff),
  linear-gradient(rgb(32, 60, 120), rgb(32, 60, 120)),
  linear-gradient(#f5c001, #f5c001);
  background-size: 20px 4px, 100% 4px, 0 4px;
  background-position: calc(20px * -1) 100%, 100% 100%, 0 100%;
  background-repeat: no-repeat;
  transition: background-size 2s linear, background-position 2s linear;

  &:hover {
    color: ${props => props.theme.color.black.regular};
    background-size: 20px 4px, 0 4px, 100% 4px;
  background-position: calc(100% + 20px) 100%, 100% 100%, 0 100%;
  }
`;

export default About;
