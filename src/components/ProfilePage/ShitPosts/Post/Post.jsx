import React from "react";
import c from "./Post.module.css"

const Post = (props) => {

  let post = props.Post.map( PostID => <div className={c.Post}>{PostID.text}</div> )

  return (
    <div>
      {post}
    </div>
  );
};

export default Post;