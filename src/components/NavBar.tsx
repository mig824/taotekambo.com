/** @jsx jsx */
import React from 'react';
import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import { jsx } from '@emotion/react';

import { navBarCSS } from '../utils/styles/scoped.css';

const NavBar = ({ siteTitle }: any) => (
  <nav css={navBarCSS}>
    <div className="left">
      <h2>
        <Link
          to="/"
          style={{
            textDecoration: `none`,
          }}
        >
          {siteTitle}
        </Link>
      </h2>
    </div>
    <div className="right">
      <ul>
        <Link to="/shop">
          <li>Shop</li>
        </Link>
        <Link to="/blog">
          <li>Blog</li>
        </Link>
        <Link to="/contact">
          <li>Contact</li>
        </Link>
      </ul>
    </div>
  </nav>
);

NavBar.propTypes = {
  siteTitle: PropTypes.string,
};

NavBar.defaultProps = {
  siteTitle: ``,
};

export default NavBar;
