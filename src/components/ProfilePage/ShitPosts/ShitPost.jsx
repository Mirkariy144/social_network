import React from "react";
import c from './ShitPost.module.css'

const ShitPost = (props) => {

  let newPostWright = React.createRef();

  let sendPost = () => {
    let postText = newPostWright.current.value;
    props.newPost(postText);
  }

  return (
    <div className={c.ShitPost}>
      <textarea ref={newPostWright}></textarea>
      <button onClick={sendPost}>Add post</button>
    </div>
  );
};

export default ShitPost