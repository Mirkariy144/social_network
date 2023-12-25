import React, { Suspense, lazy, useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { useParams } from 'react-router-dom';
import axios from 'axios';

// import ProfilePage from '../../ProfilePage/ProfilePage';
import c from '../../Content/Content.module.css';
import Loader from '../../Loader/Loader';
import { useAuth } from '../../../React/CustomHooks/CustomHooks';

const ProfilePage = lazy(() => import('../../ProfilePage/ProfilePage'));

let UserPageContainerProps = ({ Posts }) => {
  const { id } = useParams();
  const [curUser, setCurUser] = useState(null);
  const { user } = useAuth();

  useEffect(() => {
    axios
      .get('https://social-network.samuraijs.com/api/1.0/profile/' + id)
      .then((responce) => {
        setCurUser(responce.data);
      });
  }, [id]);

  if (!curUser || !user) {
    return <Loader />;
  }
  return (
    <div className={c.appContent}>
      <Suspense fallback={<Loader />}>
        <ProfilePage Users={curUser} Posts={Posts} authUser={user} id={id} />
      </Suspense>
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