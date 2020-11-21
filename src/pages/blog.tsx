import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';

import Layout from '../components/Layout';
import SEO from '../components/SEO';
import Post from '../components/Post';

const BlogPage = () => {
  const {
    allStrapiPosts: { nodes },
  } = useStaticQuery(graphql`
    query StrapiPosts {
      allStrapiPosts {
        nodes {
          id
          title
          author
          body
          created_at
          published_at(formatString: "MM-DD-YYYY")
          updated_at
        }
      }
    }
  `);

  return (
    <Layout>
      <SEO title="Blog" />
      <div>
        <h1>Blog</h1>
      </div>
      {nodes.map((node: any) => (
        <Post post={node} key={node.id} />
      ))}
    </Layout>
  );
};

export default BlogPage;
