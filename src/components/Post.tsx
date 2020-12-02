import React from 'react';

const Post = ({ post: { title, author, published_at, body } }: any) => {
  return (
    <section>
      <h3>{title}</h3>
      <h6>
        Published by {author}, on {published_at}
      </h6>
      <p>{body}</p>
    </section>
  );
};

export default Post;
