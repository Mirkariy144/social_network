import React, { useState } from 'react';
import Modal from 'react-modal';
import c from './Modal.module.css';

export const AvatarModal = ({
  setIsModalAvatarOpen,
  isModalAvatarOpen,
  putNewPhoto,
}) => {
  Modal.setAppElement('#root');

  const [formData, setFormData] = useState('');

  const closeModal = () => {
    setIsModalAvatarOpen(false);
  };

  const onSubmit = () => {
    putNewPhoto(formData);
  };

  const handleLargeFileChange = (event) => {
    const formData = new FormData();
    const file = event.target.files[0];
    formData.append('image', file);
    setFormData(formData);
  };
  return (
    <Modal
      className={c.Main}
      isOpen={isModalAvatarOpen}
      onRequestClose={closeModal}
      contentLabel="Окошко для смены аватара"
    >
      <div className={c.Forms}>
        <label htmlFor="large">Большой аватар: </label>
        <input name="large" type="file" onChange={handleLargeFileChange} />
        <button disabled={!formData} type="submit" onClick={onSubmit}>
          Сохранить
        </button>
      </div>
      <div className={c.Forms}>
        <button onClick={closeModal}>Закрыть</button>
      </div>
    </Modal>
  );
};
