import React from 'react';
import Post from './ShitPosts/Post/Post';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import ShitPostContainer from './ShitPosts/ShitPostContainer';
import Loader from '../Loader/Loader';
import { UserInfoType } from '../../Types/GlobalInterface';
import { PostsType } from './../../Types/GlobalInterface';

const ProfilePage = ({
  Users,
  Posts,
  setIsModalAvatarOpen,
  isModalAvatarOpen,
  putNewPhoto,
  isModalAboutMeOpen,
  setIsModalAboutMeOpen,
  putInfoAboutMe,
  id,
} : {
Users: UserInfoType;
Posts: PostsType;
setIsModalAvatarOpen: React.Dispatch<React.SetStateAction<boolean>>;
isModalAvatarOpen: boolean;
putNewPhoto: (data: FormData) => void;
isModalAboutMeOpen: boolean;
setIsModalAboutMeOpen: React.Dispatch<React.SetStateAction<boolean>>;
putInfoAboutMe: (data: FormData) => void;
id: string;}) => {
  if (!Users) {
    return <Loader />;
  }
  return (
    <div>
      <img src="https://klike.net/uploads/posts/2022-10/1666767724_3-30.jpg" />
      <ProfileInfo
        Users={Users}
        setIsModalAvatarOpen={setIsModalAvatarOpen}
        isModalAvatarOpen={isModalAvatarOpen}
        putNewPhoto={putNewPhoto}
        setIsModalAboutMeOpen={setIsModalAboutMeOpen}
        isModalAboutMeOpen={isModalAboutMeOpen}
        putInfoAboutMe={putInfoAboutMe}
        id={id}
      />
      <ShitPostContainer />
      <Post Posts={Posts} />
    </div>
  );
};

export default ProfilePage;
