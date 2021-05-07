import React from 'react';
import styled from 'styled-components';
import { StaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';

import { Container } from '@components/global';
import ExternalLink from '@common/ExternalLink';

const Header = () => (
  <StaticQuery
    query={graphql`
      query {
        art_build: file(
          sourceInstanceName: { eq: "art" }
          name: { eq: "DOP_Cover" }
        ) {
          childImageSharp {
            fluid(maxWidth: 1400) {
              ...GatsbyImageSharpFluid_withWebp_tracedSVG
            }
          }
        }
      }
    `}
    render={data => (
      <HeaderWrapper>
        <Container>
          <Grid>
            <Art>
              <Img fluid={data.art_build.childImageSharp.fluid} />
            </Art>
            <Text>
              <h1>
                What if the 1%
                <br />
                fled a climate-ravaged Earth
                <br />
                to colonize Mars?
              </h1>
              <br />
              <p>
                <div class="more-button" onClick={scrollToAbout}>
                  More. &nbsp;&#x2794;
                </div>
              </p>
            </Text>
          </Grid>
        </Container>
      </HeaderWrapper>
    )}
  />
);

const HeaderWrapper = styled.header`
  background-color: ${props => props.theme.color.primary};
  padding-top: 70px;

  @media (max-width: ${props => props.theme.screen.md}) {
    padding-top: 128px;
  }
`;

const Art = styled.figure`
  width: 50%;
  margin: 0;
  margin-top: 4vh;
  margin-bottom: 20vh;
  margin-left: auto;
  margin-right: auto;
  box-shadow: 7px 7px 5px black;

  > div {
    width: 100%;
    margin-bottom: 0;

    @media (max-width: ${props => props.theme.screen.md}) {
      width: 100%;
    }
  }
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  grid-gap: 64px;

  @media (max-width: ${props => props.theme.screen.md}) {
    grid-template-columns: 1fr;
    grid-gap: 80px;

    > ${Art} {
      order: 2;
    }
  }
`;

const Text = styled.div`
  justify-self: center;

  @media (max-width: ${props => props.theme.screen.md}) {
    justify-self: start;
  }

  .more-button {
    color: inherit;
    text-decoration: none;

    &:hover {
    color: ${props => props.theme.color.black.regular};
    cursor: pointer;
  }
  }
`;

const StyledExternalLink = styled(ExternalLink)`
  color: inherit;
  text-decoration: none;

  &:hover {
    color: ${props => props.theme.color.black.regular};
  }
`;

function scrollToAbout() {
  var elmnt = document.getElementById("blurb");

  elmnt.scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"}); // Top
}

export default Header;
