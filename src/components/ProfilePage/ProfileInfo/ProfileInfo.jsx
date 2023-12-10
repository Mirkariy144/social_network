import React from "react";
import c from './ProfileInfo.module.css'
import UnfoundAva from '../../../Img/avaUnfound.jpg'
import { ProfileStatusContainer } from "./ProfileStatus/ProfileStatusContainer";

const ProfileInfo = ({Users}) => {
    return (
        <div className={c.ProfilePage}>
            <div className={c.Ava}>
                <img src={Users.photos.large?Users.photos.large:UnfoundAva} />
                <ProfileStatusContainer />
            </div>
            <div className={c.Name}>
                {Users.fullName}
            </div>
            <div className={c.AboutMe}>
                {Users.aboutMe}
                <div>{Users.contacts.facebook }</div>
                <div>{Users.contacts.website }</div>
                <div>{Users.contacts.vk }</div>
                <div>{Users.contacts.twitter }</div>
                <div>{Users.contacts.instagram }</div>
                <div>{Users.contacts.youtube }</div>
                <div>{Users.contacts.github }</div>
                <div>{Users.contacts.mainLink }</div>
                <div>{Users.lookingForAJob }</div>
                <div>{Users.lookingForAJobDescription }</div>
            </div>
        </div>
    );
};

export default ProfileInfo;