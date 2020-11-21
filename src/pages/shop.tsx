import React from 'react';
import { Link } from 'gatsby';

import Layout from '../components/Layout';
import SEO from '../components/SEO';

const ShopPage = () => (
  <Layout>
    <SEO title="Shop" />
    <h1>Shop</h1>
    <p>Welcome to page 2</p>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
);

export default ShopPage;
