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
  id,
}) => {
  const UC = Users.contacts;

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
        {!id ? <button onClick={openModalAvatar}>Change ava</button> : null}
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
        <h3>{Users.aboutMe ? 'О себе: ' : null}</h3>
        <div>{Users.aboutMe}</div>
        <h4>{UC.facebook ? 'Facebook: ' : null}</h4>
        <div>{Users.contacts.facebook}</div>
        <h4>{UC.website ? 'Website: ' : null}</h4>
        <div>{Users.contacts.website}</div>
        <h4>{UC.vk ? 'VK: ' : null}</h4>
        <div>{Users.contacts.vk}</div>
        <h4>{UC.twitter ? 'Twitter: ' : null}</h4>
        <div>{Users.contacts.twitter}</div>
        <h4>{UC.instagram ? 'Instagram: ' : null}</h4>
        <div>{Users.contacts.instagram}</div>
        <h4>{UC.youtube ? 'Youtube: ' : null}</h4>
        <div>{Users.contacts.youtube}</div>
        <h4>{UC.github ? 'Github: ' : null}</h4>
        <div>{Users.contacts.github}</div>
        <h4>{UC.mainLink ? 'Main link: ' : null}</h4>
        <div>{Users.contacts.mainLink}</div>
        <h4>{Users.lookingForAJob ? 'Ищю работу: ' : null}</h4>
        <div>{Users.lookingForAJob}</div>
        <div>{Users.lookingForAJobDescription}</div>
        <AboutMeModal
          isModalAboutMeOpen={isModalAboutMeOpen}
          setIsModalAboutMeOpen={setIsModalAboutMeOpen}
          putInfoAboutMe={putInfoAboutMe}
          Users={Users}
        />
        {!id ? (
          <button onClick={openModalAboutMe}>Change info about me</button>
        ) : null}
      </div>
    </div>
  );
};

export default ProfileInfo;
