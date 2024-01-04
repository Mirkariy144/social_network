import React from 'react';
import c from './ProfileInfo.module.css';
import UnfoundAva from '../../../Img/avaUnfound.jpg';
import { ProfileStatusContainer } from './ProfileStatus/ProfileStatusContainer';
import { AvatarModal } from './Modal/AvatarModal';
import AboutMeModal from './Modal/AboutMeModal';
import { UserInfoType } from '../../../Types/GlobalInterface';
import { AuthUser } from '../../../React/CustomHooks/CustomHooks';

interface ProfileInfoProps {
  Users: UserInfoType
  setIsModalAvatarOpen?: React.Dispatch<React.SetStateAction<boolean>>
  isModalAvatarOpen?: boolean
  putNewPhoto?: (data: FormData) => void
  isModalAboutMeOpen?: boolean
  setIsModalAboutMeOpen?: React.Dispatch<React.SetStateAction<boolean>>
  putInfoAboutMe?: (data: FormData) => void
  id: string
  AuthUser: AuthUser
}

const ProfileInfo: React.FC<ProfileInfoProps> = ({
  Users,
  setIsModalAvatarOpen,
  isModalAvatarOpen,
  putNewPhoto,
  isModalAboutMeOpen,
  setIsModalAboutMeOpen,
  putInfoAboutMe,
  id,
  AuthUser
}) => {
  const UC = Users?.contacts;

  const openModalAvatar = () => {
    if (!setIsModalAvatarOpen) return;
    setIsModalAvatarOpen(true);
  };

  const openModalAboutMe = () => {
    if (!setIsModalAboutMeOpen) return;
    setIsModalAboutMeOpen(true);
  };

  return (
    <div className={c.ProfilePage}>
      <div className={c.Ava}>
        <img src={Users?.photos?.large ? Users?.photos.large : UnfoundAva} />
        {+id === AuthUser.id ? (
        <>
          <AvatarModal
            setIsModalAvatarOpen={setIsModalAvatarOpen}
            isModalAvatarOpen={isModalAvatarOpen}
            putNewPhoto={putNewPhoto}
          />
          <button onClick={openModalAvatar}>Change ava</button>
        </>
        ) : null}

        <div>
          <ProfileStatusContainer />
        </div>
      </div>
      <div className={c.Name}>{Users?.fullName}</div>
      <div className={c.AboutMe}>
        <h3>{Users?.aboutMe ? 'О себе: ' : null}</h3>
        <div>{Users?.aboutMe}</div>
        <h4>{UC?.facebook ? 'Facebook: ' : null}</h4>
        <div>{Users?.contacts.facebook}</div>
        <h4>{UC?.website ? 'Website: ' : null}</h4>
        <div>{Users?.contacts.website}</div>
        <h4>{UC?.vk ? 'VK: ' : null}</h4>
        <div>{Users?.contacts.vk}</div>
        <h4>{UC?.twitter ? 'Twitter: ' : null}</h4>
        <div>{Users?.contacts.twitter}</div>
        <h4>{UC?.instagram ? 'Instagram: ' : null}</h4>
        <div>{Users?.contacts.instagram}</div>
        <h4>{UC?.youtube ? 'Youtube: ' : null}</h4>
        <div>{Users?.contacts.youtube}</div>
        <h4>{UC?.github ? 'Github: ' : null}</h4>
        <div>{Users?.contacts.github}</div>
        <h4>{UC?.mainLink ? 'Main link: ' : null}</h4>
        <div>{Users?.contacts.mainLink}</div>
        <h4>{Users?.lookingForAJob ? 'Ищю работу: ' : null}</h4>
        <div>{Users?.lookingForAJob}</div>
        <div>{Users?.lookingForAJobDescription}</div>

        {+id === AuthUser.id ? (
          <>
            <AboutMeModal
              isModalAboutMeOpen={isModalAboutMeOpen}
              setIsModalAboutMeOpen={setIsModalAboutMeOpen}
              putInfoAboutMe={putInfoAboutMe}
              initialValues={Users}
            />
            <button onClick={openModalAboutMe}>Change info about me</button>
          </>
        ) : null}
      </div>
    </div>
  );
};

export default ProfileInfo;
