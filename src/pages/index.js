import React from 'react';

import Layout from '@common/Layout';
import Navbar from '@common/Navbar';

import Header from '@sections/Header';
import Blurb from '@sections/Blurb';
import Bio from '@sections/Bio';
import Team from '@sections/Team';
import Faq from '@sections/Faq';
import Footer from '@sections/Footer';
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
    <Newsletter />
  </Layout>
);

export default IndexPage;
