import React from "react";
import { addNewPost, modifyPostContent } from "../../../Redux/ProfilePageReducer";
import ShitPost from "./ShitPost";

const ShitPostContainer = (props) => {

  let sendPost = () => {
    props.store.dispatch(addNewPost())
  };

  let newPostChange = (text) => {
    props.store.dispatch(modifyPostContent(text))
  };
  
 
  return (
    <ShitPost newInfoPostChange={newPostChange} 
              addPost={sendPost} 
              newPostLetter={props.store.getState().ShitPosts.newPostLetter} />
  );
};

export default ShitPostContainer