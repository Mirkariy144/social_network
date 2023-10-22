import React from "react";
import c from './ShitPost.module.css'
import { newPostActionCeator, newPostWrightingActionCreator } from "../../../Redux/ProfilePageReducer";


const ShitPost = (props) => {
  let newPostWright = React.createRef();

  let sendPost = () => {
    props.dispatch(newPostActionCeator())
  };

  let newPostChange = () => {
    let newPostWrighting = newPostWright.current.value;
    props.dispatch(newPostWrightingActionCreator(newPostWrighting))
  };
  

 
  return (
    <div className={c.ShitPost}>
      <textarea ref={newPostWright} onChange={newPostChange} value={props.newPostLetter} />
      <button onClick={sendPost}>Add post</button>
    </div>
  );
};

export default ShitPost