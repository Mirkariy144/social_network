import React, { useState } from "react";
import c from './ProfileInfo.module.css'
import UnfoundAva from '../../../Img/avaUnfound.jpg'
import { ProfileStatusContainer } from "./ProfileStatus/ProfileStatusContainer";
import Modal from "react-modal";
import { Field, reduxForm, formValueSelector } from "redux-form";

const ProfileInfo = ({Users, setIsModalOpen, isModalOpen, putNewPhoto, handleSubmit}) => {
  
  Modal.setAppElement("#root");

  const [formData, setFormData] = useState(null)

  const openModal = () => {
    setIsModalOpen(true)
  }

  const closeModal = () => {
    setIsModalOpen(false)
  }

  const onSubmit = () => {
    putNewPhoto(formData)
  }

  const handleLargeFileChange = (event) => {
    const formData = new FormData();
    const file = event.target.files[0];
    formData.append("image", file);
    setFormData(formData)
  }


    return (
        <div className={c.ProfilePage}>
            <div className={c.Ava}>
                <img src={Users.photos.large?Users.photos.large:UnfoundAva} />
                <button onClick={openModal}>Change ava</button>
                <Modal 




                                       isOpen={isModalOpen} 
                  onRequestClose={closeModal} 
                  contentLabel="Окошко для смены аватара"
                >
                    <>
                      <label htmlFor="large">Большой аватар:  </label>
                      <input name="large" type="file" onChange={handleLargeFileChange} />
                    </>
                    <button disabled={!formData} type="submit" onClick={onSubmit}>Сохранить</button>
                  <button onClick={closeModal}>Закрыть</button>
                </Modal>
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

export default reduxForm({
  form: 'profile'
})(ProfileInfo)