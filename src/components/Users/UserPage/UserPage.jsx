import React from "react";
import c from './UserInfo.module.css'
import UnfoundAva from '../../../Img/avaUnfound.jpg'

let UserPage = ({zog_zog}) => {
  return (
      <div className={c.ProfilePage}>
        <div className={c.Ava}>
          <img src={zog_zog.Avatar?zog_zog.Avatar:UnfoundAva} />
        </div>
        <div className={c.Name}>
          {zog_zog.Name}
        </div>
        <div className={c.AboutMe}>
            About me
          <div>{zog_zog.City}</div>
          <div>{zog_zog.Birthday}</div>
          <div>{zog_zog.Education}</div>
          <div>{zog_zog.Website}</div>
        </div>
      </div>
  );
};

export default UserPage;