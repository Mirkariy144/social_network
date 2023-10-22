import React from "react";
import Post from "./ShitPosts/Post/Post"
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import ShitPostContainer from "./ShitPosts/ShitPostContainer";

const ProfilePage = (props) => {
  console.log(props.store.getState())
  return (
    <div>
      <ProfileInfo />
      <ShitPostContainer store={props.store} />
      <Post Post={props.store.getState().ShitPosts.Post} />
    </div>
  );
};

export default ProfilePage