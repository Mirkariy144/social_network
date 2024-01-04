import React, { Suspense, lazy, useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import c from '../../Content/Content.module.css';
import Loader from '../../Loader/Loader';
import { useAuth } from '../../../react/customHooks/CustomHooks';
import { AppStateType } from '../../../redux/reduxStore';

const ProfilePage = lazy(() => import('../../ProfilePage/ProfilePage'));

let UserPageContainerProps = ({ Posts }: any) => {
  const { id } = useParams<string>();
  const [curUser, setCurUser] = useState(null);
  const { user } = useAuth();

  useEffect(() => {
    axios
      .get('https://social-network.samuraijs.com/api/1.0/profile/' + id)
      .then((responce) => {
        setCurUser(responce.data);
      });
  }, [id]);

  if (!id) return null

  if (!curUser || !user) {
    return <Loader />;
  }
  return (
    <div className={c.appContent}>
      <Suspense fallback={<Loader />}>
        <ProfilePage Users={curUser} Posts={Posts} id={id} AuthUser={user}/>
      </Suspense>
    </div>
  );
};

let mapStateToProps = (state: AppStateType) => {
  return {
    Posts: state.ShitPosts.Posts,
  };
};

const UserPageContainer = connect(mapStateToProps)(UserPageContainerProps);

export default UserPageContainer;
