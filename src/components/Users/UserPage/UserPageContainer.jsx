import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { useParams } from 'react-router-dom';
import axios from 'axios';

import ProfilePage from '../../ProfilePage/ProfilePage';
import c from '../../Content/Content.module.css';
import Loader from '../../Loader/Loader';

let UserPageContainerProps = ({ Posts }) => {
  const { id } = useParams();
  const [user, setUser] = useState(null);

  useEffect(() => {
    axios
      .get('https://social-network.samuraijs.com/api/1.0/profile/' + id)
      .then((responce) => {
        setUser(responce.data);
      });
  }, [id]);

  if (!user) {
    return <Loader />;
  }
  return (
    <div className={c.appContent}>
      <img src="https://klike.net/uploads/posts/2022-10/1666767724_3-30.jpg" />
      <ProfilePage Users={user} Posts={Posts} />
    </div>
  );
};

let mapStateToProps = (state) => {
  return {
    Posts: state.ShitPosts.Posts,
  };
};

const UserPageContainer = connect(mapStateToProps)(UserPageContainerProps);

export default UserPageContainer;
