import React from "react";
import c from './ProfileInfo.module.css'


const ProfileInfo = ({Users}) => {
    return (
        <div className={c.ProfilePage}>
            <div className={c.Ava}>
                <img src={Users.Avatar} />
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