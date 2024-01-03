import React from 'react';
import c from './Post.module.css';
import { PostsType } from '../../../../Types/GlobalInterface';



const Post = React.memo(({ Posts } : {Posts: PostsType}) => {
  let post = Posts.map(({ id, text }) => (
    <pre className={c.Post} key={id}>
      {text}
    </pre>
  ));
  return <div>{post}</div>;
});

export default Post;
