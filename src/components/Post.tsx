import React from 'react';

const Post = ({ post }: any) => {
  return (
    <div>
      <h3>{post.title}</h3>
      <p>{post.author}</p>
      <p>Published on: {post.published_at}</p>
      <p>{post.body}</p>
    </div>
  );
};

export default Post;
