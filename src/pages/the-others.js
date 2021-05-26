import React from 'react';

import Layout from '@common/Layout';
import { Container } from '@components/global';

import styled from 'styled-components';
import '../styles/sign-up.css';
import Background from '../images/art/campfire.jpg';

const TheOthers = () => (
  <Layout>
    <img className='background-image' src={Background} alt='No Image' />
    <Wrapper>      
        <Container>
        <div class="ml-form-embed"
        data-account="2495824:w5x8z5w2r4"
        data-form="4161406:g2i1m6">
        </div>
        </Container>
    </Wrapper>
  </Layout>
);

const Wrapper = styled.header`
margin-top: 25vh;
background-color: ${props => props.theme.color.primary};
  padding-top: 70px;
  padding-bottom: 70px;

  @media (max-width: ${props => props.theme.screen.md}) {
    padding-top: 128px;
    padding-bottom: 128px;
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

export default TheOthers;
