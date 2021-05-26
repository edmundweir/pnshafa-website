import React from 'react';
import styled from 'styled-components';
import { StaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';

import { Container } from '@components/global';

const ImageSection = () => (
  <StaticQuery
    query={graphql`
      query {
        art_build: file(
          sourceInstanceName: { eq: "art" }
          name: { eq: "DOP_Banner" }
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
            <Art>
              <Img fluid={data.art_build.childImageSharp.fluid} />
            </Art>
      </HeaderWrapper>
    )}
  />
);

const HeaderWrapper = styled.header`
  background-color: ${props => props.theme.color.primary};

  @media (max-width: ${props => props.theme.screen.md}) {
  }
`;

const Art = styled.figure`
  width: 100vw;
  height: auto;
  object-fit: cover;
  align-self: center;
  margin: 0;
  margin-left: auto;
  margin-right: auto;

  > div {
    width: 100%;
    margin-bottom: 0;

    @media (max-width: ${props => props.theme.screen.md}) {
      width: 100%;
    }
  }
`;

export default ImageSection;
