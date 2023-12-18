import React from 'react';
import c from './ProfileInfo.module.css';
import UnfoundAva from '../../../Img/avaUnfound.jpg';
import { ProfileStatusContainer } from './ProfileStatus/ProfileStatusContainer';
import { AvatarModal } from './Modal/AvatarModal';
import AboutMeModal from './Modal/AboutMeModal';

const ProfileInfo = ({
  Users,
  setIsModalAvatarOpen,
  isModalAvatarOpen,
  putNewPhoto,
  isModalAboutMeOpen,
  setIsModalAboutMeOpen,
  putInfoAboutMe,
}) => {
  const openModalAvatar = () => {
    setIsModalAvatarOpen(true);
  };

  const openModalAboutMe = () => {
    setIsModalAboutMeOpen(true);
  };

  return (
    <div className={c.ProfilePage}>
      <div className={c.Ava}>
        <img src={Users.photos.large ? Users.photos.large : UnfoundAva} />
        <button onClick={openModalAvatar}>Change ava</button>
        <AvatarModal
          setIsModalAvatarOpen={setIsModalAvatarOpen}
          isModalAvatarOpen={isModalAvatarOpen}
          putNewPhoto={putNewPhoto}
        />
        <div>
          <ProfileStatusContainer />
        </div>
      </div>
      <div className={c.Name}>{Users.fullName}</div>
      <div className={c.AboutMe}>
        {Users.aboutMe}
        <div>{Users.contacts.facebook}</div>
        <div>{Users.contacts.website}</div>
        <div>{Users.contacts.vk}</div>
        <div>{Users.contacts.twitter}</div>
        <div>{Users.contacts.instagram}</div>
        <div>{Users.contacts.youtube}</div>
        <div>{Users.contacts.github}</div>
        <div>{Users.contacts.mainLink}</div>
        <div>{Users.lookingForAJob}</div>
        <div>{Users.lookingForAJobDescription}</div>
        <AboutMeModal
          isModalAboutMeOpen={isModalAboutMeOpen}
          setIsModalAboutMeOpen={setIsModalAboutMeOpen}
          putInfoAboutMe={putInfoAboutMe}
        />
        <button onClick={openModalAboutMe}>Change info about me</button>
      </div>
    </div>
  );
};

export default ProfileInfo;
