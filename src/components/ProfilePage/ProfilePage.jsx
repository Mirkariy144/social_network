import React from "react";
import { useParams } from "react-router-dom";
import Post from "./ShitPosts/Post/Post"
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import ShitPostContainer from "./ShitPosts/ShitPostContainer";
import Loader from "../Loader/Loader";

const ProfilePage = ({Users, Posts}) => {

  if (!Users) {
    return <Loader />
  }
  return (
    <div>
      <ProfileInfo Users={Users} />
      <ShitPostContainer />
      <Post Posts={Posts} />
    </div>
  );
};

export default ProfilePage