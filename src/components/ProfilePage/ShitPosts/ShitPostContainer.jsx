import React from "react";
import { addNewPost, modifyPostContent } from "../../../Redux/ProfilePageReducer";
import ShitPost from "./ShitPost";
import StoreContext from "../../../StoreContext";

const ShitPostContainer = (props) => {
  return (
    <StoreContext.Consumer> 
    {
      (store) => {
        
        let sendPost = () => {
          store.dispatch(addNewPost())
        };

        let newPostChange = (text) => {
          store.dispatch(modifyPostContent(text))
        };

        return (
          <ShitPost newInfoPostChange={newPostChange} 
                    addPost={sendPost} 
                    newPostLetter={store.getState().ShitPosts.newPostLetter} />
        )
      }
    }
    </StoreContext.Consumer>
  );
};

export default ShitPostContainer