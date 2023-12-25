import React, { Suspense, lazy } from 'react';
import c from './Content.module.css';
import Loader from '../Loader/Loader';
// import ProfilePageContainer from '../ProfilePage/ProfilePageContainer';

const ProfilePageContainer = lazy(
  () => import('../ProfilePage/ProfilePageContainer'),
);

const Content = () => {
  return (
    <div className={c.appContent}>
      <Suspense fallback={<Loader />}>
        <ProfilePageContainer />
      </Suspense>
    </div>
  );
};

export default Content;
