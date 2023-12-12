import React, { useState } from 'react';
import Modal from 'react-modal';

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
      isOpen={isModalAvatarOpen}
      onRequestClose={closeModal}
      contentLabel="Окошко для смены аватара"
    >
      <>
        <label htmlFor="large">Большой аватар: </label>
        <input name="large" type="file" onChange={handleLargeFileChange} />
      </>
      <button disabled={!formData} type="submit" onClick={onSubmit}>
        Сохранить
      </button>
      <button onClick={closeModal}>Закрыть</button>
    </Modal>
  );
};
