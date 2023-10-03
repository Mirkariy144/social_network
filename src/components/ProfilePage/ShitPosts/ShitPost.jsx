import React from "react";
import c from './ShitPost.module.css'

const ShitPost = () => {
  return (
    <div className={c.ShitPost}>
      <textarea></textarea>
      <button>Add post</button>
    </div>
  );
};

export default ShitPost