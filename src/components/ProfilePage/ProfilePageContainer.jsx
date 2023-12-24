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

const MyProfilePageContainer = ({ Posts }) => {
  const { id } = useParams();
  const [user, setUser] = useState(null);
  const [isModalAvatarOpen, setIsModalAvatarOpen] = useState(false);
  const [isModalAboutMeOpen, setIsModalAboutMeOpen] = useState(false);

  useEffect(() => {
    axiosGetProfileById(id).then((data) => {
      setUser(data);
    });
  }, [id]);

  const putNewPhoto = (data) => {
    axiosPutPhoto(data);
  };

  const putInfoAboutMe = (data) => {
    axiosPutProfile(data);
  };

  if (!user) {
    return <Loader />;
  }
  return (
    <ProfilePage
      Posts={Posts}
      Users={user}
      setIsModalAvatarOpen={setIsModalAvatarOpen}
      isModalAvatarOpen={isModalAvatarOpen}
      putNewPhoto={putNewPhoto}
      putInfoAboutMe={putInfoAboutMe}
      isModalAboutMeOpen={isModalAboutMeOpen}
      setIsModalAboutMeOpen={setIsModalAboutMeOpen}
    />
  );
};

let mapStateToProps = (state) => {
  return {
    Posts: state.ShitPosts.Posts,
  };
};

const ProfilePageContainer = connect(mapStateToProps)(MyProfilePageContainer);

export default ProfilePageContainer;
