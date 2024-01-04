import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { useParams } from 'react-router-dom';
import ProfilePage from './ProfilePage';
import Loader from '../Loader/Loader';
import {
  axiosGetProfileById,
  axiosPutPhoto,
  axiosPutProfile,
} from '../../API/API';
import { AppStateType } from '../../redux/reduxStore';
import { PostsType, UserInfoType } from '../../types/globalInterface';
import { useAuth } from '../../react/customHooks/CustomHooks';

const MyProfilePageContainer = ({ Posts }: { Posts: PostsType }) => {
  const { id } = useParams();
  const { user } = useAuth();
  const [userf, setUserf] = useState<UserInfoType | null>(null);
  const [isModalAvatarOpen, setIsModalAvatarOpen] = useState<boolean>(false);
  const [isModalAboutMeOpen, setIsModalAboutMeOpen] = useState<boolean>(false);

  useEffect(() => {
    if (!id) {
      return;
  }
    axiosGetProfileById(id).then((data) => {
      setUserf(data);
    });
  }, [id, isModalAboutMeOpen, isModalAvatarOpen]);

  const putNewPhoto = (data: FormData) => {
    axiosPutPhoto(data);
  };

  const putInfoAboutMe = (data: FormData) => {
    axiosPutProfile(data);
  };

  if (!user) {
    return <Loader />;
  }
  return (
    <div>
      <ProfilePage
        Posts={Posts}
        Users={userf}
        setIsModalAvatarOpen={setIsModalAvatarOpen}
        isModalAvatarOpen={isModalAvatarOpen}
        putNewPhoto={putNewPhoto}
        putInfoAboutMe={putInfoAboutMe}
        isModalAboutMeOpen={isModalAboutMeOpen}
        setIsModalAboutMeOpen={setIsModalAboutMeOpen}
        id={id?id:''}
        AuthUser={user}
      />
    </div>
  );
};

let mapStateToProps = (state: AppStateType) => {
  return {
    Posts: state.ShitPosts.Posts,
  };
};

const ProfilePageContainer = connect(mapStateToProps)(MyProfilePageContainer);

export default ProfilePageContainer;
