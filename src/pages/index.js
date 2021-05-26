import React from 'react';

import Layout from '@common/Layout';
import Navbar from '@common/Navbar';

import Header from '@sections/Header';
import Blurb from '@sections/Blurb';
import Bio from '@sections/Bio';
import ImageSection from '@sections/ImageSection';
import Newsletter from '@sections/Newsletter';

const IndexPage = () => (
  <Layout>
    <Navbar />
    <Header />
    <Blurb />
    <Bio />
    {/*<Team />
    <Faq />
    <Footer />*/}
    {/*<div class="ml-form-embed"
    data-account="2495824:w5x8z5w2r4"
    data-form="3947551:v5n4b0">
    </div>
    <br />
    <br />
    <center>
      <p onClick={scrollToTop} style={{ cursor: 'pointer', }}>
                Return to top.
      </p>
      <br />
      <br />
  </center>*/}
  <ImageSection />
  <Newsletter />
  </Layout>
);

const scrollToTop = () => {
  window.scrollTo({top: 0, left: 0, behavior: 'smooth' })
}

export default IndexPage;
