import React, { Suspense, lazy } from 'react';
import c from './Content.module.css';
import Loader from '../Loader/Loader';

const ProfilePageContainerLazy = lazy(
  () => import('../ProfilePage/ProfilePageContainer'),
);

const Content = () => {
  return (
    <div className={c.appContent}>
      <Suspense fallback={<Loader />}>
        <ProfilePageContainerLazy />
      </Suspense>
    </div>
  );
};

export default Content;
