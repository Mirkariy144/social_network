import React from "react";
import c from './ShitPost.module.css'
import { addNewPost, modifyPostContent } from "../../../Redux/ProfilePageReducer";
// import { newPostActionCeator, newPostWrightingActionCreator } from "../../../Redux/ProfilePageReducer";


const ShitPost = (props) => {
  let newPostWright = React.createRef();

  let sendPost = () => {
    props.dispatch(addNewPost())
  };

  let newPostChange = () => {
    let newPostWrighting = newPostWright.current.value;
    props.dispatch(modifyPostContent(newPostWrighting))
  };
  
 
  return (
    <div className={c.ShitPost}>
      <textarea ref={newPostWright} onChange={newPostChange} value={props.newPostLetter || ''} placeholder="Yours new SHITpost"/>
      <button onClick={sendPost}>Add post</button>
    </div>
  );
};

export default ShitPost