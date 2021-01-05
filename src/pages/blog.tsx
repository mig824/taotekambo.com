import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';

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
          updated_at
          published_at(formatString: "MM/DD/YYYY")
        }
      }
    }
  `);

  return (
    <>
      <SEO title="Blog" />
      <div>
        <h1>Blog</h1>
      </div>
      {nodes.map((node: any) => (
        <Post post={node} key={node.id} />
      ))}
    </>
  );
};

export default BlogPage;
