import React from "react";
import c from "./Post.module.css"

const Post = ({Posts}) => {

  let post = Posts.map( ({id, text}) => (
    <pre className={c.Post} key={id}>{text}</pre>
  ));

  return (
    <div>
      {post}
    </div>
  );
};

export default Post;