import React from 'react';
import c from './Content.module.css';
import ProfilePageContainer from '../ProfilePage/ProfilePageContainer';
import { useLocation, useRoutes } from 'react-router-dom';

const Content = () => {
  return (
    <div className={c.appContent}>
      <img src="https://klike.net/uploads/posts/2022-10/1666767724_3-30.jpg" />
      <ProfilePageContainer />
    </div>
  );
};

export default Content;
