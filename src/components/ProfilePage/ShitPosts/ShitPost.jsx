import React from "react";
import c from './ShitPost.module.css'


const ShitPost = (props) => {

  console.log(props)
  let newPostWright = React.createRef();

  let sendPost = () => {
    props.addPost()
  };

  let newPostChange = () => {
    let text = newPostWright.current.value;
    props.newInfoPostChange(text);
  };
  
 
  return (
    <div className={c.ShitPost}>
      <textarea ref={newPostWright} onChange={newPostChange} value={props.newPostLetter || ''} placeholder="Yours new SHITpost"/>
      <button onClick={sendPost}>Add post</button>
    </div>
  );
};

export default ShitPost