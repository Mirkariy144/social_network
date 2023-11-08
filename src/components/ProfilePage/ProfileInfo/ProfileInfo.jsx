import React from "react";
import c from './ProfileInfo.module.css'
import UnfoundAva from '../../../Img/avaUnfound.jpg'

const ProfileInfo = ({Users}) => {
    return (
        <div className={c.ProfilePage}>
            <div className={c.Ava}>
                <img src={Users.Avatar?Users.Avatar:UnfoundAva} />
            </div>
            <div className={c.Name}>
                {Users.Name}
            </div>
            <div className={c.AboutMe}>
                About me
                <div>{Users.City}</div>
                <div>{Users.Birthday}</div>
                <div>{Users.Education}</div>
                <div>{Users.Website}</div>
            </div>
        </div>
    );
};

export default ProfileInfo;