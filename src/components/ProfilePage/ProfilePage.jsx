import React from "react";
import ShitPost from "./ShitPosts/ShitPost";
import Post from "./ShitPosts/Post/Post"
import ProfileInfo from "./ProfileInfo/ProfileInfo";

const ProfilePage = (props) => {
  return (
    <div>
      <ProfileInfo />
      <ShitPost 
      newPostLetter={props.Post.newPostLetter} 
      newPost={props.newPost} 
      newPostWrighting={props.newPostWrighting}
      />
      <Post 
      Post={props.Post.Post}
      />
    </div>
  );
};

export default ProfilePage