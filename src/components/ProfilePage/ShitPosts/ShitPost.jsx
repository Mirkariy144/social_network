import React from "react";
import c from './ShitPost.module.css'

const ShitPost = (props) => {
  console.log(props)

  let newPostWright = React.createRef();

  let sendPost = () => {
    let postText = newPostWright.current.value;
    props.newPost(postText);
  };

  let newPostChange = () => {
    let newPostWrighting = newPostWright.current.value;
    props.newPostWrighting(newPostWrighting)
  };
  return (
    <div className={c.ShitPost}>
      <textarea ref={newPostWright} onChange={newPostChange} value={props.newPostLetter} />
      <button onClick={sendPost}>Add post</button>
    </div>
  );
};

export default ShitPost