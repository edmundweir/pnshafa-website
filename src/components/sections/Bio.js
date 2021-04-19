import React from 'react';
import styled from 'styled-components';
import { StaticQuery, graphql } from 'gatsby';
import TwitterIcon from '@static/icons/twitter.svg';

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
      <HeaderWrapper id="bio">
        <Container>
          <Grid>
            {/*<Art>
              <Img fluid={data.art_build.childImageSharp.fluid} />
            </Art>*/}
            <Text>
              <h1>
                P.N. Shafa
              </h1>
              <br />
              <p>
                I am P.N. Shafa, an American ex-patriot living in Melbourne, Australia. 
                I enjoy thinking and writing about the growth and demise of societal systems and the intergenerational snowball effect of individual intention on human civilization. 
                When I'm not writing speculative fiction, I'm busy co-founding <a href="https://descendantsofearth.com" target="_blank">Descendants of Earth</a>, an environmental game that merges real world climate action with a dystopian gameplay narrative.
              </p>
              <br /> <br />
              <center><p>⛯ ⛯ ⛯</p></center>
              <br /> <br />
              <center><p>Follow me on <a href="https://twitter.com/PNShafa" target="_blank"> <img src={TwitterIcon} /></a></p></center>
              <br />
              <center><p>Work with me at <a href="https://nativehumanoid.com" target="_blank">Native Humanoid.</a></p></center>
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
  padding-bottom: 70px;

  @media (max-width: ${props => props.theme.screen.md}) {
    padding-top: 128px;
    padding-bottom: 128px;
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
  grid-template-columns: 1fr;
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

  img {
      margin-left: 6px;
  }

  a {
      color: black;
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
  var elmnt = document.getElementById("about");

  elmnt.scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"}); // Top
}

export default Header;
