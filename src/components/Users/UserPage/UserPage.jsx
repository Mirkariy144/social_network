import React from "react";
import c from './UserInfo.module.css'
import UnfoundAva from '../../../Img/avaUnfound.jpg'

let UserPage = ({User}) => {
  return (
      <div className={c.ProfilePage}>
        <div className={c.Ava}>
          <img src={User.Avatar?User.Avatar:UnfoundAva} />
        </div>
        <div className={c.Name}>
          {User.Name}
        </div>
        <div className={c.AboutMe}>
            About me
          <div>{User.City}</div>
          <div>{User.Birthday}</div>
          <div>{User.Education}</div>
          <div>{User.Website}</div>
        </div>
      </div>
  );
};

export default UserPage;