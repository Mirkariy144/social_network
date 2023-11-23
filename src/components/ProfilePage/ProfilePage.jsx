import React from "react";
import Post from "./ShitPosts/Post/Post"
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import ShitPostContainer from "./ShitPosts/ShitPostContainer";
import Loader from "../Loader/Loader";
import { useParams } from "react-router-dom";

const ProfilePage = ({Users, Posts}) => {

  // let id = useParams()
  // setCurrentUserID(id)

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