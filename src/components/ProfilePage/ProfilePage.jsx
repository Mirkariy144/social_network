import React from 'react';
import Post from './ShitPosts/Post/Post';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import ShitPostContainer from './ShitPosts/ShitPostContainer';
import Loader from '../Loader/Loader';

const ProfilePage = ({
  Users,
  Posts,
  setIsModalAvatarOpen,
  isModalAvatarOpen,
  putNewPhoto,
  isModalAboutMeOpen,
  setIsModalAboutMeOpen,
  putInfoAboutMe,
  authUser,
  id,
}) => {
  if (!Users) {
    return <Loader />;
  }
  return (
    <div>
      <ProfileInfo
        Users={Users}
        setIsModalAvatarOpen={setIsModalAvatarOpen}
        isModalAvatarOpen={isModalAvatarOpen}
        putNewPhoto={putNewPhoto}
        setIsModalAboutMeOpen={setIsModalAboutMeOpen}
        isModalAboutMeOpen={isModalAboutMeOpen}
        putInfoAboutMe={putInfoAboutMe}
        authUser={authUser}
        id={id}
      />
      <ShitPostContainer />
      <Post Posts={Posts} />
    </div>
  );
};

export default ProfilePage;
