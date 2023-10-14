import React from "react";
import c from './ProfileInfo.module.css'


const ProfileInfo = () => {
    return (
        <div className={c.ProfilePage}>
            <div className={c.Ava}>
                <img src='http://img.playground.ru/images/9/8/COTE_YOBA.jpg' />
            </div>
            <div className={c.Name}>
                Name
            </div>
            <div className={c.AboutMe}>
                About me
                <div>Birthdate</div>
                <div>City</div>
                <div>Education</div>
                <div>Web-site</div>
            </div>
        </div>
    );
};

export default ProfileInfo;