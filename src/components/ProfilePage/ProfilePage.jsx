import React from "react";
import ShitPost from "./ShitPosts/ShitPost";
import Post from "./ShitPosts/Post/Post"
import ProfileInfo from "./ProfileInfo/ProfileInfo";

const ProfilePage = (props) => {
  return (
    <div>
      <ProfileInfo />
      <ShitPost 
      newPostLetter={props.newPostLetter} 
      dispatch={props.dispatch} 
      />
      <Post 
      Post={props.Post}
      />
    </div>
  );
};

export default ProfilePage