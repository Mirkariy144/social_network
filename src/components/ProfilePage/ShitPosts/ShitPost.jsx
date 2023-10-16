import React from "react";
import c from './ShitPost.module.css'

const ShitPost = (props) => {
  let newPostWright = React.createRef();

  let sendPost = () => {
    // props.newPost();
    props.dispatch({ type: 'NEW-POST' })
  };

  let newPostChange = () => {
    let newPostWrighting = newPostWright.current.value;
    // props.newPostWrighting(newPostWrighting)
    props.dispatch({ type: 'NEW-POST-WRIGHTING', letter: newPostWrighting })
  };
  

 
  return (
    <div className={c.ShitPost}>
      <textarea ref={newPostWright} onChange={newPostChange} value={props.newPostLetter} />
      <button onClick={sendPost}>Add post</button>
    </div>
  );
};

export default ShitPost