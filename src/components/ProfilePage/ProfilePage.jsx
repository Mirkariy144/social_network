import React from "react";
import Post from "./ShitPosts/Post/Post"
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import ShitPostContainer from "./ShitPosts/ShitPostContainer";

const ProfilePage = (props) => {
  return (
    <div>
      <ProfileInfo />
      <ShitPostContainer />
      <Post Post={props.Post} />
    </div>
  );
};

export default ProfilePage