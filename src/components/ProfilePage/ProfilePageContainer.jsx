import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import ProfilePage from './ProfilePage';
import Loader from '../Loader/Loader';
import { axiosPutPhoto } from '../../API/API';

const MyProfilePageContainer = ({ Posts }) => {
  const { id } = useParams();
  const [user, setUser] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    axios
      .get('https://social-network.samuraijs.com/api/1.0/profile/' + id)
      .then((responce) => {
        setUser(responce.data);
      });
  }, [id]);

  const putNewPhoto = (data) => {
    axiosPutPhoto(data);
  };

  if (!user) {
    return <Loader />;
  }
  return (
    <ProfilePage
      Posts={Posts}
      Users={user}
      setIsModalOpen={setIsModalOpen}
      isModalOpen={isModalOpen}
      putNewPhoto={putNewPhoto}
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
